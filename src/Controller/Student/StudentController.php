<?php

namespace App\Controller\Student;
use App\Entity\ClassRoom;
use App\Entity\Schedule;
use App\Repository\ScheduleRepository;
use App\Repository\SessionRepository;
use Carbon\Carbon;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Class AppController
 * @package App\Controller
 * @Route("/")
 */
class StudentController extends AbstractController
{
    /**
     * @return Response
     * @Route(name="student_dashboard")
     */
    public function index(Request $request, ScheduleRepository $scheduleRepository, SessionRepository $sessionRepository)
    {
        $formBuilder = $this->createFormBuilder()
        ->add('className', EntityType::class, [
            'label' => 'Classe',
            'class' => ClassRoom::class,
            'choice_label' => 'name',
            'placeholder' => '-- Choisir --',
            'constraints' => [
                new NotBlank([
                    'message' => 'Veuillez sélectionner une classe',
                ])
            ],
        ])
        ->setMethod('POST');

        $form = $formBuilder->getForm();
        $form->handleRequest($request);

        $params['form'] = $form->createView();

        if ($form->isSubmitted() && $form->isValid()) {
            $schedule = $scheduleRepository->findOneBy(array('classRoom' => $form->get('className')->getData(), 'year' => Carbon::now()->format('Y')));
            if($schedule instanceof Schedule) {
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

                $params['schedule'] = $schedule;
                $params['sessions'] = $sessions;
            }
            else {
                $this->addFlash('info', 'Aucun emploi de temps n\'est trouvé pour cette classe.');
            }
        }
        return $this->render('student/index.html.twig', $params);
    }
}