<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* common/side-nav.html.twig */
class __TwigTemplate_3e7cb081e08fccd75870b7f549b7a9d8bbb203c2bc2ab49947b7cc8bec4aeea2 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "common/side-nav.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "common/side-nav.html.twig"));

        // line 1
        $context["path"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 1, $this->source); })()), "request", [], "any", false, false, false, 1), "getRequestUri", [], "method", false, false, false, 1);
        // line 2
        echo "
<!-- LEFT SIDEBAR -->
<div id=\"sidebar-nav\" class=\"sidebar\">
    <div class=\"sidebar-scroll\">
        <nav>
            <ul class=\"nav\">
                ";
        // line 8
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
            // line 9
            echo "                <li>
                    <a href=\"";
            // line 10
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_dashboard");
            echo "\" class=\"";
            echo (((is_string($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 10, $this->source); })())) && is_string($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 = "/admin") && ('' === $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 || $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 === substr($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4, -strlen($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144))))) ? ("active") : (""));
            echo "\">
                        <i class=\"lnr lnr-home\"></i>
                        <span>Tableau de bord</span>
                    </a>
                </li>
                <li>
                    <a href=\"";
            // line 16
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("class_room_index");
            echo "\" class=\"";
            echo (((is_string($__internal_1cfccaec8dd2e8578ccb026fbe7f2e7e29ac2ed5deb976639c5fc99a6ea8583b = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 16, $this->source); })())) && is_string($__internal_68aa442c1d43d3410ea8f958ba9090f3eaa9a76f8de8fc9be4d6c7389ba28002 = "/admin/class/room") && ('' === $__internal_68aa442c1d43d3410ea8f958ba9090f3eaa9a76f8de8fc9be4d6c7389ba28002 || 0 === strpos($__internal_1cfccaec8dd2e8578ccb026fbe7f2e7e29ac2ed5deb976639c5fc99a6ea8583b, $__internal_68aa442c1d43d3410ea8f958ba9090f3eaa9a76f8de8fc9be4d6c7389ba28002)))) ? ("active") : (""));
            echo "\">
                        <i class=\"lnr lnr-users\"></i>
                        <span>Classes</span>
                    </a>
                </li>
                <li>
                    <a href=\"";
            // line 22
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("subject_index");
            echo "\" class=\"";
            echo (((is_string($__internal_d7fc55f1a54b629533d60b43063289db62e68921ee7a5f8de562bd9d4a2b7ad4 = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 22, $this->source); })())) && is_string($__internal_01476f8db28655ee4ee02ea2d17dd5a92599be76304f08cd8bc0e05aced30666 = "/admin/subject") && ('' === $__internal_01476f8db28655ee4ee02ea2d17dd5a92599be76304f08cd8bc0e05aced30666 || 0 === strpos($__internal_d7fc55f1a54b629533d60b43063289db62e68921ee7a5f8de562bd9d4a2b7ad4, $__internal_01476f8db28655ee4ee02ea2d17dd5a92599be76304f08cd8bc0e05aced30666)))) ? ("active") : (""));
            echo "\">
                        <i class=\"lnr lnr-file-empty\"></i>
                        <span>Matières</span>
                    </a>
                </li>
                <li>
                    <a href=\"";
            // line 28
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("teacher_index");
            echo "\" class=\"";
            echo (((is_string($__internal_01c35b74bd85735098add188b3f8372ba465b232ab8298cb582c60f493d3c22e = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 28, $this->source); })())) && is_string($__internal_63ad1f9a2bf4db4af64b010785e9665558fdcac0e8db8b5b413ed986c62dbb52 = "/admin/teacher") && ('' === $__internal_63ad1f9a2bf4db4af64b010785e9665558fdcac0e8db8b5b413ed986c62dbb52 || 0 === strpos($__internal_01c35b74bd85735098add188b3f8372ba465b232ab8298cb582c60f493d3c22e, $__internal_63ad1f9a2bf4db4af64b010785e9665558fdcac0e8db8b5b413ed986c62dbb52)))) ? ("active") : (""));
            echo "\">
                        <i class=\"lnr lnr-briefcase\"></i>
                        <span>Enseignants</span>
                    </a>
                </li>
                <li>
                    <a href=\"";
            // line 34
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("hall_index");
            echo "\" class=\"";
            echo (((is_string($__internal_f10a4cc339617934220127f034125576ed229e948660ebac906a15846d52f136 = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 34, $this->source); })())) && is_string($__internal_887a873a4dc3cf8bd4f99c487b4c7727999c350cc3a772414714e49a195e4386 = "/admin/hall") && ('' === $__internal_887a873a4dc3cf8bd4f99c487b4c7727999c350cc3a772414714e49a195e4386 || 0 === strpos($__internal_f10a4cc339617934220127f034125576ed229e948660ebac906a15846d52f136, $__internal_887a873a4dc3cf8bd4f99c487b4c7727999c350cc3a772414714e49a195e4386)))) ? ("active") : (""));
            echo "\">
                        <i class=\"lnr lnr-home\"></i>
                        <span>Salles</span>
                    </a>
                </li>
                <li>
                    <a href=\"";
            // line 40
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("schedule_index");
            echo "\" class=\"";
            echo (((is_string($__internal_d527c24a729d38501d770b40a0d25e1ce8a7f0bff897cc4f8f449ba71fcff3d9 = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 40, $this->source); })())) && is_string($__internal_f6dde3a1020453fdf35e718e94f93ce8eb8803b28cc77a665308e14bbe8572ae = "/admin/schedule") && ('' === $__internal_f6dde3a1020453fdf35e718e94f93ce8eb8803b28cc77a665308e14bbe8572ae || 0 === strpos($__internal_d527c24a729d38501d770b40a0d25e1ce8a7f0bff897cc4f8f449ba71fcff3d9, $__internal_f6dde3a1020453fdf35e718e94f93ce8eb8803b28cc77a665308e14bbe8572ae)))) ? ("active") : (""));
            echo "\">
                        <i class=\"lnr lnr-calendar-full\"></i>
                        <span>Emplois de temps</span>
                    </a>
                </li>
                <li>
                    <a href=\"";
            // line 46
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_logout");
            echo "\">
                        <i class=\"lnr lnr-power-switch\"></i>
                        <span>Déconnexion</span>
                    </a>
                </li>
                ";
        } else {
            // line 52
            echo "                    <li>
                        <a href=\"";
            // line 53
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("student_dashboard");
            echo "\" class=\"";
            echo (((is_string($__internal_25c0fab8152b8dd6b90603159c0f2e8a936a09ab76edb5e4d7bc95d9a8d2dc8f = (isset($context["path"]) || array_key_exists("path", $context) ? $context["path"] : (function () { throw new RuntimeError('Variable "path" does not exist.', 53, $this->source); })())) && is_string($__internal_f769f712f3484f00110c86425acea59f5af2752239e2e8596bcb6effeb425b40 = "/student/schedule") && ('' === $__internal_f769f712f3484f00110c86425acea59f5af2752239e2e8596bcb6effeb425b40 || 0 === strpos($__internal_25c0fab8152b8dd6b90603159c0f2e8a936a09ab76edb5e4d7bc95d9a8d2dc8f, $__internal_f769f712f3484f00110c86425acea59f5af2752239e2e8596bcb6effeb425b40)))) ? ("active") : (""));
            echo "\">
                            <i class=\"lnr lnr-calendar-full\"></i>
                            <span>Emplois de temps</span>
                        </a>
                    </li>
                    <li>
                        <a href=\"";
            // line 59
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            echo "\">
                            <i class=\"lnr lnr-power-switch\"></i>
                            <span>Déconnexion</span>
                        </a>
                    </li>
                ";
        }
        // line 65
        echo "            </ul>
        </nav>
    </div>
</div>
<!-- END LEFT SIDEBAR -->";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "common/side-nav.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  156 => 65,  147 => 59,  136 => 53,  133 => 52,  124 => 46,  113 => 40,  102 => 34,  91 => 28,  80 => 22,  69 => 16,  58 => 10,  55 => 9,  53 => 8,  45 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% set path = app.request.getRequestUri() %}

<!-- LEFT SIDEBAR -->
<div id=\"sidebar-nav\" class=\"sidebar\">
    <div class=\"sidebar-scroll\">
        <nav>
            <ul class=\"nav\">
                {% if is_granted('ROLE_ADMIN') %}
                <li>
                    <a href=\"{{ path('admin_dashboard') }}\" class=\"{{ path ends with '/admin' ? 'active' : '' }}\">
                        <i class=\"lnr lnr-home\"></i>
                        <span>Tableau de bord</span>
                    </a>
                </li>
                <li>
                    <a href=\"{{ path('class_room_index') }}\" class=\"{{ path starts with '/admin/class/room' ? 'active' : '' }}\">
                        <i class=\"lnr lnr-users\"></i>
                        <span>Classes</span>
                    </a>
                </li>
                <li>
                    <a href=\"{{ path('subject_index') }}\" class=\"{{ path starts with '/admin/subject' ? 'active' : '' }}\">
                        <i class=\"lnr lnr-file-empty\"></i>
                        <span>Matières</span>
                    </a>
                </li>
                <li>
                    <a href=\"{{ path('teacher_index') }}\" class=\"{{ path starts with '/admin/teacher' ? 'active' : '' }}\">
                        <i class=\"lnr lnr-briefcase\"></i>
                        <span>Enseignants</span>
                    </a>
                </li>
                <li>
                    <a href=\"{{ path('hall_index') }}\" class=\"{{ path starts with '/admin/hall' ? 'active' : '' }}\">
                        <i class=\"lnr lnr-home\"></i>
                        <span>Salles</span>
                    </a>
                </li>
                <li>
                    <a href=\"{{ path('schedule_index') }}\" class=\"{{ path starts with '/admin/schedule' ? 'active' : '' }}\">
                        <i class=\"lnr lnr-calendar-full\"></i>
                        <span>Emplois de temps</span>
                    </a>
                </li>
                <li>
                    <a href=\"{{ path('admin_logout') }}\">
                        <i class=\"lnr lnr-power-switch\"></i>
                        <span>Déconnexion</span>
                    </a>
                </li>
                {% else %}
                    <li>
                        <a href=\"{{ path('student_dashboard') }}\" class=\"{{ path starts with '/student/schedule' ? 'active' : '' }}\">
                            <i class=\"lnr lnr-calendar-full\"></i>
                            <span>Emplois de temps</span>
                        </a>
                    </li>
                    <li>
                        <a href=\"{{ path('app_logout') }}\">
                            <i class=\"lnr lnr-power-switch\"></i>
                            <span>Déconnexion</span>
                        </a>
                    </li>
                {% endif %}
            </ul>
        </nav>
    </div>
</div>
<!-- END LEFT SIDEBAR -->", "common/side-nav.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\common\\side-nav.html.twig");
    }
}
