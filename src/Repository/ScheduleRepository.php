<?php

namespace App\Repository;

use App\Entity\Schedule;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Schedule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Schedule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Schedule[]    findAll()
 * @method Schedule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScheduleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Schedule::class);
    }

    public function getOneBy(Schedule $schedule) {

        return $this->createQueryBuilder('s')
            ->where('s.year = :year')
            ->andWhere('s.admin = :admin')
            ->andWhere('s.classRoom <> :classRoom')
            ->setParameter('year', $schedule->getYear())
            ->setParameter('admin', $schedule->getAdmin())
            ->setParameter('classRoom', $schedule->getClassRoom())
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }
}
