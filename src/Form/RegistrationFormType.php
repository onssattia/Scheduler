<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('firstName', null, [
                'label' => 'Prénom',
                'label_attr' => ['class' => 'pull-left'],
                'attr' => ['placeholder' => 'Entrer votre nom']
            ])
            ->add('lastName', null, [
                'label' => 'Nom',
                'label_attr' => ['class' => 'pull-left'],
                'attr' => ['placeholder' => 'Entrer votre prénom']
            ])
            ->add('cin', null, [
                'label' => 'CIN',
                'label_attr' => ['class' => 'pull-left'],
                'attr' => ['placeholder' => 'Entrer le numéo de la carte d\'identité CIN']
            ])
            ->add('email', EmailType::class, [
                'label' => 'Adresse e-mail',
                'label_attr' => ['class' => 'pull-left'],
                'attr' => ['placeholder' => 'Entrer une adresse e-mail']
            ])
            ->add('plainPassword', PasswordType::class, [
                'label' => 'Mot de passe',
                'label_attr' => ['class' => 'pull-left'],
                'attr' => ['placeholder' => 'Entrer un mot de passe'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez entrer un mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit contenir au moins {{ limit }} caractères',
                        'max' => 4096,
                    ]),
                ],
                'mapped' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
