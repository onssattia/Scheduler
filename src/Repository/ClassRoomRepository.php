<?php

namespace App\Repository;

use App\Entity\ClassRoom;
use App\Entity\Schedule;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ClassRoom|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClassRoom|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClassRoom[]    findAll()
 * @method ClassRoom[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClassRoomRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClassRoom::class);
    }


    /**
     * @param User $admin
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(User $admin)
    {
        return $this->createQueryBuilder('c')
            ->select('count(c.id)')
            ->where('c.admin = :admin')
            ->setParameter('admin', $admin)
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

}
