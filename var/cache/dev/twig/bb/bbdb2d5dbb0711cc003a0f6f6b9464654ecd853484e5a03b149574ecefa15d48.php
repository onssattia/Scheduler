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

/* common/header.html.twig */
class __TwigTemplate_39a6edc6c0748104764a150d0c9253b1a1831400033e894781748752809b325d extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "common/header.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "common/header.html.twig"));

        // line 1
        echo "<!-- NAVBAR -->
<nav class=\"navbar navbar-default navbar-fixed-top\">
    <div class=\"brand\">
        <a href=\"";
        // line 4
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) ? ("admin_dashboard") : ("student_dashboard")));
        echo "\">
            Scheduler
        </a>
    </div>
    <div class=\"container-fluid\">
        <div class=\"navbar-btn\">
            <button type=\"button\" class=\"btn-toggle-fullwidth\"><i class=\"lnr lnr-arrow-left-circle\"></i></button>
        </div>
        <div id=\"navbar-menu\">
            <ul class=\"nav navbar-nav navbar-right\">
                <li>
                    <a href=\"";
        // line 15
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath((($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) ? ("admin_logout") : ("app_logout")));
        echo "\" class=\"icon-menu\">
                        <i class=\"lnr lnr-power-switch\"></i> <span>Déconnexion</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- END NAVBAR -->



";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "common/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  62 => 15,  48 => 4,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!-- NAVBAR -->
<nav class=\"navbar navbar-default navbar-fixed-top\">
    <div class=\"brand\">
        <a href=\"{{path(is_granted('ROLE_ADMIN') ? 'admin_dashboard' : 'student_dashboard')}}\">
            Scheduler
        </a>
    </div>
    <div class=\"container-fluid\">
        <div class=\"navbar-btn\">
            <button type=\"button\" class=\"btn-toggle-fullwidth\"><i class=\"lnr lnr-arrow-left-circle\"></i></button>
        </div>
        <div id=\"navbar-menu\">
            <ul class=\"nav navbar-nav navbar-right\">
                <li>
                    <a href=\"{{ path(is_granted('ROLE_ADMIN') ? 'admin_logout' : 'app_logout') }}\" class=\"icon-menu\">
                        <i class=\"lnr lnr-power-switch\"></i> <span>Déconnexion</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- END NAVBAR -->



", "common/header.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\common\\header.html.twig");
    }
}
