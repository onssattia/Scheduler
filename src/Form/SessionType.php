<?php

namespace App\Form;

use App\Entity\Hall;
use App\Entity\Session;
use App\Entity\Subject;
use App\Entity\Teacher;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SessionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('teacher', EntityType::class, [
                'label' => 'Enseignant',
                'class' => Teacher::class,
                'choice_label' => 'firstName',
                'placeholder' => '-- Choisir --'
            ])
            ->add('subject', EntityType::class, [
                'label' => 'Matière',
                'class' => Subject::class,
                'choice_label' => 'name',
                'placeholder' => '-- Choisir --'
            ])
            ->add('hall', EntityType::class, [
                'label' => 'Salle',
                'class' => Hall::class,
                'choice_label' => 'name',
                'placeholder' => '-- Choisir --'
            ])
            ->add('day', ChoiceType::class, [
                'label' => 'Jour',
                'placeholder' => '-- Choisir --',
                'choices' => [
                    'Lundi' => '1',
                    'Mardi' => '2',
                    'Mercredi' => '3',
                    'Jeudi' => '4',
                    'Vendredi' => '5',
                    'Samedi' => '6',
                ]
            ])
            ->add('startTime', TimeType::class,
                [
                    'label' => 'Heure début',
                    'placeholder' => '--'
                ]
            )
            ->add('endTime', TimeType::class,
                [
                    'label' => 'Heure fin',
                    'placeholder' => '--'
                ]
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Session::class,
        ]);
    }
}
