<?php

namespace App\Controller\Admin;

use App\Entity\Teacher;
use App\Form\TeacherType;
use App\Repository\TeacherRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/teacher")
 */
class TeacherController extends AbstractController
{
    /**
     * @Route("/", name="teacher_index", methods={"GET"})
     */
    public function index(TeacherRepository $teacherRepository): Response
    {
        return $this->render('admin/teacher/index.html.twig', [
            'teachers' => $teacherRepository->findBy(array('admin' => $this->getUser())),
        ]);
    }

    /**
     * @Route("/new", name="teacher_new", methods={"GET","POST"})
     */
    public function new(Request $request, TeacherRepository $teacherRepository): Response
    {
        $teacher = new Teacher();
        $form = $this->createForm(TeacherType::class, $teacher);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $exist = $teacherRepository->findOneBy(['cin' => $teacher->getCin(), 'admin' => $this->getUser()]);
            if($exist instanceof Teacher) {
                $message = 'Le numéro de la carte CIN ' . $exist->getCin() . ' est déjà utilisé';
                $this->addFlash('danger', $message);
            }
            else {
                $teacher->setAdmin($this->getUser());
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($teacher);
                $entityManager->flush();
                $this->addFlash('success', 'Fiche enseignant enregistrée avec succès !');
                return $this->redirectToRoute('teacher_index');
            }
        }

        return $this->render('admin/teacher/new.html.twig', [
            'teacher' => $teacher,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="teacher_show", methods={"GET"})
     */
    public function show(Teacher $teacher): Response
    {
        return $this->render('admin/teacher/show.html.twig', [
            'teacher' => $teacher,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="teacher_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Teacher $teacher, TeacherRepository $teacherRepository): Response
    {
        $form = $this->createForm(TeacherType::class, $teacher);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $exist = $teacherRepository->getOneBy($teacher);

            if($exist instanceof Teacher) {
                $message = 'Le numéro de la carte CIN ' . $exist->getCin() . ' est déjà utilisé';
                $this->addFlash('danger', $message);
            }
            else {
                $this->getDoctrine()->getManager()->flush();
                $this->addFlash('success', 'Fiche enseignant mis à jour avec succès !');
                return $this->redirectToRoute('teacher_index');
            }

        }

        return $this->render('admin/teacher/edit.html.twig', [
            'teacher' => $teacher,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="teacher_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Teacher $teacher): Response
    {
        if ($this->isCsrfTokenValid('delete'.$teacher->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($teacher);
            $entityManager->flush();
            $this->addFlash('info', 'Fiche enseignant supprimée avec succès !');
        }

        return $this->redirectToRoute('teacher_index');
    }
}
