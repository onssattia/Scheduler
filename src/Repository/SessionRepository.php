<?php

namespace App\Repository;

use App\Entity\Hall;
use App\Entity\Schedule;
use App\Entity\Session;
use App\Entity\Teacher;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Session|null find($id, $lockMode = null, $lockVersion = null)
 * @method Session|null findOneBy(array $criteria, array $orderBy = null)
 * @method Session[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SessionRepository extends ServiceEntityRepository
{
    private $entityManager;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Session::class);
        $this->entityManager = $entityManager;
    }

    /**
     * @param Schedule $schedule
     * @return mixed
     */
    public function getSessionsBySchedule(Schedule $schedule)
    {
        return $this->createQueryBuilder('s')
            ->join('s.teacher', 't')
            ->join('s.hall', 'h')
            ->join('s.subject', 'sub')
            ->andWhere('s.schedule = :schedule')
            ->setParameter('schedule', $schedule)
            ->orderBy('s.day')
            ->orderBy('s.startTime')
            ->getQuery()
            ->getResult();
    }

    public function getSessionByTeacher(Schedule $schedule, Teacher $teacher, string $day, \DateTimeInterface $startTime, \DateTimeInterface $endTime): ?Session
    {
        $parameters = array(
            'schedule' => $schedule,
            'teacher' => $teacher,
            'day' => $day,
            'startTime' => $startTime,
            'endTime' => $endTime
        );

        $dql = "SELECT s from App\Entity\Session s WHERE s.schedule = :schedule AND s.teacher = :teacher AND s.day = :day AND (";
        $dql = $dql . "((s.startTime <= :startTime AND s.endTime > :startTime) OR (s.startTime < :endTime AND s.endTime >= :endTime))";
        $dql = $dql . " OR (s.startTime > :startTime AND s.endTime <= :endTime))";

        $query = $this->entityManager->createQuery($dql);

        $query->setParameters($parameters);

        return $query->getOneOrNullResult();
    }

    public function getSessionByHall(Schedule $schedule, Hall $hall, string $day, \DateTimeInterface $startTime, \DateTimeInterface $endTime): ?Session
    {
        $parameters = array(
            'schedule' => $schedule,
            'hall' => $hall,
            'day' => $day,
            'startTime' => $startTime,
            'endTime' => $endTime
        );

        $dql = "SELECT s from App\Entity\Session s WHERE s.schedule = :schedule AND s.hall = :hall AND s.day = :day AND (";
        $dql = $dql . "((s.startTime <= :startTime AND s.endTime > :startTime) OR (s.startTime < :endTime AND s.endTime >= :endTime))";
        $dql = $dql . " OR (s.startTime > :startTime AND s.endTime <= :endTime))";

        $query = $this->entityManager->createQuery($dql);

        $query->setParameters($parameters);

        return $query->getOneOrNullResult();
    }

}
