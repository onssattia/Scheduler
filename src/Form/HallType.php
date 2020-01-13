<?php

namespace App\Form;

use App\Entity\Hall;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HallType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, ['label' => 'Nom', 'attr' => ['placeholder' => 'Entrer le nom de la salle']])
            ->add('department', null, ['label' => 'Département', 'attr' => ['placeholder' => 'Entrer le département']])
            ->add('floor', null, ['label' => 'Etage', 'attr' => ['placeholder' => 'Entrer le numéro de l\'étage']])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Hall::class,
        ]);
    }
}
