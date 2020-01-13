<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CreateAdminCommand extends Command
{
    protected static $defaultName = 'create-admin';
    private $passwordEncoder;
    private $entityManager;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $entityManager, string $name = null)
    {
        parent::__construct($name);
        $this->passwordEncoder = $passwordEncoder;
        $this->entityManager = $entityManager;
    }

    protected function configure()
    {
        $this
            ->setDescription('Création de compte administrateur')
            ->addArgument('email', InputArgument::OPTIONAL, 'Adresse e-mail')
            ->addArgument('password', InputArgument::OPTIONAL, 'Mot de passe')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $email = $input->getArgument('email');
        $password = $input->getArgument('password');

        if($this->entityManager->getRepository(User::class)->findOneByEmail($email) instanceof User) {
            $io->error('L\'adresse email déjà prise !');
            return 0;
        }

        $student = new User();
        $student->setEmail($email)
            ->setPassword(
                $this->passwordEncoder->encodePassword($student, $password)
            )
            ->setRoles(['ROLE_ADMIN']);

        $this->entityManager->persist($student);
        $this->entityManager->flush();

        $io->success('Un nouveau compte admin créé avec succès');
        return 0;
    }
}
