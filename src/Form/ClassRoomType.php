<?php

namespace App\Form;

use App\Entity\ClassRoom;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ClassRoomType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, ['label' => 'Nom', 'attr' => ['placeholder' => 'Entrer le nom de la classe']])
            ->add('fullName', null, ['label' => 'Nom complet', 'attr' => ['placeholder' => 'Entrer le nom complet de la salle']])
            ->add('studentsNumber', null, ['label' => 'Nombre des étudiants', 'attr' => ['placeholder' => '0']])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ClassRoom::class,
        ]);
    }
}
