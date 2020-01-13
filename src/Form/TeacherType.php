<?php

namespace App\Form;

use App\Entity\Teacher;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TeacherType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', null, ['label' => 'Prénom *', 'attr' => ['placeholder' => 'Entrer le prénom']])
            ->add('lastName', null, ['label' => 'Nom *', 'attr' => ['placeholder' => 'Entrer le nom']])
            ->add('email', EmailType::class, ['label' => 'E-mail *', 'attr' => ['placeholder' => 'Entrer l\'adresse e-mail']])
            ->add('phoneNumber', null, ['label' => 'Tél *', 'attr' => ['placeholder' => 'Entrer le numéro de tél']])
            ->add('cin', null, ['label' => 'CIN *', 'attr' => ['placeholder' => 'Entrer le numéro de la carte CIN']])
            ->add('sexe', ChoiceType::class, [
                'label' => 'CIN *',
                'placeholder' => '-- Choisir --',
                'choices' => ['Homme' => 'H', 'Femme' => 'F']
            ])
            ->add('matricule', null, ['label' => 'Matricule *', 'attr' => ['placeholder' => 'Entrer le matricule']])
            ->add('address', null, ['label' => 'Adresse', 'attr' => ['placeholder' => 'Entrer le nom de la salle']])
            ->add('zipCode', null, ['label' => 'Code postal', 'attr' => ['placeholder' => 'Entrer le code postal']])
            ->add('city', null, ['label' => 'Ville', 'attr' => ['placeholder' => 'Entrer la ville']])
            ->add('country', CountryType::class, ['label' => 'Pays', 'placeholder' => '-- Choisir --'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Teacher::class,
        ]);
    }
}
