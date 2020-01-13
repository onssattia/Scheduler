<?php

namespace App\Form;

use App\Entity\ClassRoom;
use App\Entity\Schedule;
use Carbon\Carbon;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScheduleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('classRoom', EntityType::class, [
                'label' => 'Classe',
                'class' => ClassRoom::class,
                'choice_label' => 'name',
                'placeholder' => '-- Choisir --'
            ])
            ->add('name', null, ['label' => 'Nom', 'attr' => array('placeholder' => 'Entrer le nom')])
            ->add('year', null, ['label' => 'Année', 'attr' => array('placeholder' => Carbon::today()->format('Y'))])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Schedule::class,
        ]);
    }
}
