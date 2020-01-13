<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    /**
     * @param string $role
     * @return mixed
     * @throws \Doctrine\ORM\NoResultException
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getCount($role = 'ROLE_STUDENT')
    {
        return $this->createQueryBuilder('s')
            ->select('count(s.id)')
            ->where('s.roles LIKE :role')
            ->setParameter('role', '%' . $role . '%')
            ->getQuery()
            ->getSingleScalarResult()
            ;
    }

    /**
     * @param string $email
     * @param string $role
     * @return mixed
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getByEmailAndRole(string $email, string $role) {

        return $this->createQueryBuilder('s')
            ->andWhere('s.email = :email')
            ->andWhere('s.roles LIKE :role')
            ->setParameter('email', $email)
            ->setParameter('role', '%' . $role . '%')
            ->getQuery()
            ->getOneOrNullResult();
    }
}
