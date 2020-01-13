<?php

namespace App\Repository;

use App\Entity\Teacher;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Teacher|null find($id, $lockMode = null, $lockVersion = null)
 * @method Teacher|null findOneBy(array $criteria, array $orderBy = null)
 * @method Teacher[]    findAll()
 * @method Teacher[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeacherRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Teacher::class);
    }

    /**
     * @param User $admin
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount(User $admin)
    {
        return $this->createQueryBuilder('t')
            ->select('count(t.id)')
            ->where('t.admin = :admin')
            ->setParameter('admin', $admin)
            ->getQuery()
            ->getSingleScalarResult()
            ;
    }

    public function getOneBy(Teacher $teacher) {

        return $this->createQueryBuilder('t')
            ->where('t.admin = :admin')
            ->andWhere('t.cin = :cin')
            ->andWhere('t.id <> :id')
            ->setParameter('admin', $teacher->getAdmin())
            ->setParameter('cin', $teacher->getCin())
            ->setParameter('id', $teacher->getId())
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }
}
