<?php

namespace App\Controller\Admin;

use App\Repository\ClassRoomRepository;
use App\Repository\HallRepository;
use App\Repository\SubjectRepository;
use App\Repository\TeacherRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_dashboard")
     */
    public function index(
        ClassRoomRepository $classRoomRepository,
        TeacherRepository $teacherRepository,
        HallRepository $hallRepository,
        SubjectRepository $subjectRepository,
        UserRepository $studentRepository
    )
    {

        $students = $studentRepository->getCount();
        $teachers = $teacherRepository->getCount($this->getUser());
        $halls = $hallRepository->getCount($this->getUser());
        $subjects = $subjectRepository->getCount($this->getUser());
        $classes = $classRoomRepository->getCount($this->getUser());

        return $this->render('admin/dashboard/index.html.twig', [
            'students' => $students,
            'teachers' => $teachers,
            'halls' => $halls,
            'subjects' => $subjects,
            'classes' => $classes
        ]);
    }
}
