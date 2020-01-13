<?php

namespace App\Controller\Admin;

use App\Entity\Schedule;
use App\Entity\Session;
use App\Form\ScheduleType;
use App\Form\SessionType;
use App\Repository\ScheduleRepository;
use App\Repository\SessionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/schedule")
 */
class ScheduleController extends AbstractController
{
    /**
     * @Route("/", name="schedule_index", methods={"GET"})
     */
    public function index(ScheduleRepository $scheduleRepository): Response
    {
        return $this->render('admin/schedule/index.html.twig', [
            'schedules' => $scheduleRepository->findBy(array('admin' => $this->getUser())),
        ]);
    }

    /**
     * @Route("/new", name="schedule_new", methods={"GET","POST"})
     */
    public function new(Request $request, ScheduleRepository $scheduleRepository): Response
    {
        $schedule = new Schedule();
        $form = $this->createForm(ScheduleType::class, $schedule);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $exist = $scheduleRepository->findOneBy(
                [
                    'classRoom' => $schedule->getClassRoom(),
                    'year' => $schedule->getYear(),
                    'admin' => $this->getUser()
                ]
            );

            if($exist instanceof Schedule) {
                $message = 'La classe ' . $exist->getClassRoom()->getName() . ' possède déjà un emploi de temps pour l\'année ' . $exist->getYear();
                $this->addFlash('danger', $message);
            }
            else {
                $schedule->setAdmin($this->getUser());
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($schedule);
                $entityManager->flush();
                $this->addFlash('success', 'Emploi de temps créé avec succès !');
                return $this->redirectToRoute('schedule_index');
            }
        }

        return $this->render('admin/schedule/new.html.twig', [
            'schedule' => $schedule,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="schedule_show", methods={"GET", "POST"})
     */
    public function show(Request $request, Schedule $schedule, SessionRepository $sessionRepository): Response
    {
        $error = "";
        $session = new Session();

        $form = $this->createForm(SessionType::class, $session);
        $form->handleRequest($request);

        $submitted = $request->isMethod('POST');

        if ($form->isSubmitted() && $form->isValid()) {

            $sessionByTeacher = $sessionRepository->getSessionByTeacher(
                $schedule,
                $session->getTeacher(),
                $session->getDay(),
                $session->getStartTime(),
                $session->getEndTime()
            );

            if($sessionByTeacher instanceof Session) {

                

                $day = (int)$sessionByTeacher->getDay();

                if( $day === 1) {
                    $day = 'lundi';
                }
                elseif( $day === 2) {
                    $day = 'mardi';
                }
                elseif( $day === 3) {
                    $day = 'mercredi';
                }
                elseif( $day === 4) {
                    $day = 'jeudi';
                }
                elseif( $day === 5) {
                    $day = 'vendredi';
                }
                else {
                    $day='samedi';
                }

                $error = 'L\'enseignant n\'est pas disponible le ';
                $error .= $day . ' de ';
                $error .= $sessionByTeacher->getStartTime()->format('H:i');
                $error .= ' à ' . $sessionByTeacher->getEndTime()->format('H:i');
            }
            else {
                $sessionByHall = $sessionRepository->getSessionByHall(
                    $schedule,
                    $session->getHall(),
                    $session->getDay(),
                    $session->getStartTime(),
                    $session->getEndTime()
                );

                if($sessionByHall instanceof Session) {
                    $error = 'La salle est occupé le ';
                    $error .= $sessionByHall->getDay() . ' de ';
                    $error .= $sessionByHall->getStartTime()->format('H:i');
                    $error .= ' à ' . $sessionByHall->getEndTime()->format('H:i');
                }
            }

            if($error === "") {
                $submitted = false;
                $entityManager = $this->getDoctrine()->getManager();
                $session->setSchedule($schedule);
                $entityManager->persist($session);
                $entityManager->flush();
                $this->addFlash('success', 'Séance créée avec succès !');
                return $this->redirect($request->headers->get('referer'));
            }
        }

        $scheduleSessions = $sessionRepository->getSessionsBySchedule($schedule);
        $sessions = [];

        foreach ($scheduleSessions as $scheduleSession):
        {
            $day = $scheduleSession->getDay();

            if(!array_key_exists($day, $sessions)) {
               $sessions[$day] = [];
            }
            array_push($sessions[$day], $scheduleSession);
        }endforeach;


        for($i = 1; $i <= 6; $i++) {
            if(!array_key_exists($i, $sessions)) {
                $sessions[$i] = null;
            }
        }

        ksort($sessions);

        return $this->render('admin/schedule/show.html.twig', [
            'schedule' => $schedule,
            'sessions' => $sessions,
            'form' => $form->createView(),
            'submitted' => $submitted,
            'error' => $error
        ]);
    }

    /**
     * @Route("/{id}/edit", name="schedule_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Schedule $schedule, ScheduleRepository $scheduleRepository): Response
    {
        $form = $this->createForm(ScheduleType::class, $schedule);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $exist = $scheduleRepository->getOneBy($schedule);

            if($exist instanceof Schedule) {
                $message = 'La classe ' . $exist->getClassRoom()->getName() . ' possède déjà un emploi de temps pour l\'année ' . $exist->getYear();
                $this->addFlash('danger', $message);
            }
            else {
                $this->getDoctrine()->getManager()->flush();
                $this->addFlash('success', 'Emploi de temps mis à jour avec succès !');
                return $this->redirectToRoute('schedule_index');
            }
        }

        return $this->render('admin/schedule/edit.html.twig', [
            'schedule' => $schedule,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="schedule_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Schedule $schedule): Response
    {
        if ($this->isCsrfTokenValid('delete'.$schedule->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($schedule);
            $entityManager->flush();
            $this->addFlash('info', 'Emploi de temps supprimé avec succès !');
        }

        return $this->redirectToRoute('schedule_index');
    }
}
