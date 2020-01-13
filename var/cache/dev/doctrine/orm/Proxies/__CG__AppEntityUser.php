<?php

namespace Proxies\__CG__\App\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class User extends \App\Entity\User implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Proxy\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Proxy\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = [];



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'App\\Entity\\User' . "\0" . 'id', '' . "\0" . 'App\\Entity\\User' . "\0" . 'email', '' . "\0" . 'App\\Entity\\User' . "\0" . 'firstName', '' . "\0" . 'App\\Entity\\User' . "\0" . 'lastName', '' . "\0" . 'App\\Entity\\User' . "\0" . 'cin', '' . "\0" . 'App\\Entity\\User' . "\0" . 'roles', '' . "\0" . 'App\\Entity\\User' . "\0" . 'password', '' . "\0" . 'App\\Entity\\User' . "\0" . 'classes', '' . "\0" . 'App\\Entity\\User' . "\0" . 'subjects', '' . "\0" . 'App\\Entity\\User' . "\0" . 'teachers', '' . "\0" . 'App\\Entity\\User' . "\0" . 'halls', '' . "\0" . 'App\\Entity\\User' . "\0" . 'schedules'];
        }

        return ['__isInitialized__', '' . "\0" . 'App\\Entity\\User' . "\0" . 'id', '' . "\0" . 'App\\Entity\\User' . "\0" . 'email', '' . "\0" . 'App\\Entity\\User' . "\0" . 'firstName', '' . "\0" . 'App\\Entity\\User' . "\0" . 'lastName', '' . "\0" . 'App\\Entity\\User' . "\0" . 'cin', '' . "\0" . 'App\\Entity\\User' . "\0" . 'roles', '' . "\0" . 'App\\Entity\\User' . "\0" . 'password', '' . "\0" . 'App\\Entity\\User' . "\0" . 'classes', '' . "\0" . 'App\\Entity\\User' . "\0" . 'subjects', '' . "\0" . 'App\\Entity\\User' . "\0" . 'teachers', '' . "\0" . 'App\\Entity\\User' . "\0" . 'halls', '' . "\0" . 'App\\Entity\\User' . "\0" . 'schedules'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (User $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function getId(): ?int
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function getEmail(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEmail', []);

        return parent::getEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setEmail(string $email): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setEmail', [$email]);

        return parent::setEmail($email);
    }

    /**
     * {@inheritDoc}
     */
    public function getUsername(): string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUsername', []);

        return parent::getUsername();
    }

    /**
     * {@inheritDoc}
     */
    public function getRoles(): array
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getRoles', []);

        return parent::getRoles();
    }

    /**
     * {@inheritDoc}
     */
    public function setRoles(array $roles): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setRoles', [$roles]);

        return parent::setRoles($roles);
    }

    /**
     * {@inheritDoc}
     */
    public function getPassword(): string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPassword', []);

        return parent::getPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setPassword(string $password): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPassword', [$password]);

        return parent::setPassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function getSalt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalt', []);

        return parent::getSalt();
    }

    /**
     * {@inheritDoc}
     */
    public function eraseCredentials()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'eraseCredentials', []);

        return parent::eraseCredentials();
    }

    /**
     * {@inheritDoc}
     */
    public function getClasses(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getClasses', []);

        return parent::getClasses();
    }

    /**
     * {@inheritDoc}
     */
    public function addClass(\App\Entity\ClassRoom $class): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addClass', [$class]);

        return parent::addClass($class);
    }

    /**
     * {@inheritDoc}
     */
    public function removeClass(\App\Entity\ClassRoom $class): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeClass', [$class]);

        return parent::removeClass($class);
    }

    /**
     * {@inheritDoc}
     */
    public function getSubjects(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSubjects', []);

        return parent::getSubjects();
    }

    /**
     * {@inheritDoc}
     */
    public function addSubject(\App\Entity\Subject $subject): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addSubject', [$subject]);

        return parent::addSubject($subject);
    }

    /**
     * {@inheritDoc}
     */
    public function removeSubject(\App\Entity\Subject $subject): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeSubject', [$subject]);

        return parent::removeSubject($subject);
    }

    /**
     * {@inheritDoc}
     */
    public function getTeachers(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTeachers', []);

        return parent::getTeachers();
    }

    /**
     * {@inheritDoc}
     */
    public function addTeacher(\App\Entity\Teacher $teacher): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addTeacher', [$teacher]);

        return parent::addTeacher($teacher);
    }

    /**
     * {@inheritDoc}
     */
    public function removeTeacher(\App\Entity\Teacher $teacher): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeTeacher', [$teacher]);

        return parent::removeTeacher($teacher);
    }

    /**
     * {@inheritDoc}
     */
    public function getHalls(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getHalls', []);

        return parent::getHalls();
    }

    /**
     * {@inheritDoc}
     */
    public function addHall(\App\Entity\Hall $hall): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addHall', [$hall]);

        return parent::addHall($hall);
    }

    /**
     * {@inheritDoc}
     */
    public function removeHall(\App\Entity\Hall $hall): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeHall', [$hall]);

        return parent::removeHall($hall);
    }

    /**
     * {@inheritDoc}
     */
    public function getSchedules(): \Doctrine\Common\Collections\Collection
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSchedules', []);

        return parent::getSchedules();
    }

    /**
     * {@inheritDoc}
     */
    public function addSchedule(\App\Entity\Schedule $schedule): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'addSchedule', [$schedule]);

        return parent::addSchedule($schedule);
    }

    /**
     * {@inheritDoc}
     */
    public function removeSchedule(\App\Entity\Schedule $schedule): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'removeSchedule', [$schedule]);

        return parent::removeSchedule($schedule);
    }

    /**
     * {@inheritDoc}
     */
    public function getFirstName(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getFirstName', []);

        return parent::getFirstName();
    }

    /**
     * {@inheritDoc}
     */
    public function setFirstName(string $firstName): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setFirstName', [$firstName]);

        return parent::setFirstName($firstName);
    }

    /**
     * {@inheritDoc}
     */
    public function getLastName(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastName', []);

        return parent::getLastName();
    }

    /**
     * {@inheritDoc}
     */
    public function setLastName(string $lastName): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLastName', [$lastName]);

        return parent::setLastName($lastName);
    }

    /**
     * {@inheritDoc}
     */
    public function getCin(): ?string
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getCin', []);

        return parent::getCin();
    }

    /**
     * {@inheritDoc}
     */
    public function setCin(string $cin): \App\Entity\User
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setCin', [$cin]);

        return parent::setCin($cin);
    }

}
