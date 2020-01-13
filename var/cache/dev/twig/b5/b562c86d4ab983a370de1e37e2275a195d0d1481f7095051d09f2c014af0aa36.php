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

/* admin/dashboard/index.html.twig */
class __TwigTemplate_2ad254381bd2952fdd9ee69fec5f851f6a8cf4c41a274265ce93b1fd81c7df43 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/dashboard/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/dashboard/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/dashboard/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Scheduler: Espace administration";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 5
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        // line 6
        echo "    <div class=\"panel panel-headline\">
        <div class=\"panel-heading\">
            <h3 class=\"panel-title\">Tableau de bord</h3>
            <p class=\"panel-subtitle\">
                Le: ";
        // line 10
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, "now", "d/m/Y à H:i"), "html", null, true);
        echo "
            </p>
        </div>
        <div class=\"panel-body\">
            <div class=\"row\">
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-briefcase\"></i></span>
                        <p>
                            <span class=\"number\">";
        // line 19
        echo twig_escape_filter($this->env, (isset($context["teachers"]) || array_key_exists("teachers", $context) ? $context["teachers"] : (function () { throw new RuntimeError('Variable "teachers" does not exist.', 19, $this->source); })()), "html", null, true);
        echo "</span>
                            <span class=\"title\">Enseignants</span>
                        </p>
                    </div>
                </div>
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-users\"></i></span>
                        <p>
                            <span class=\"number\">";
        // line 28
        echo twig_escape_filter($this->env, (isset($context["students"]) || array_key_exists("students", $context) ? $context["students"] : (function () { throw new RuntimeError('Variable "students" does not exist.', 28, $this->source); })()), "html", null, true);
        echo "</span>
                            <span class=\"title\">Etudiants</span>
                        </p>
                    </div>
                </div>
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-building\"></i></span>
                        <p>
                            <span class=\"number\">";
        // line 37
        echo twig_escape_filter($this->env, (isset($context["halls"]) || array_key_exists("halls", $context) ? $context["halls"] : (function () { throw new RuntimeError('Variable "halls" does not exist.', 37, $this->source); })()), "html", null, true);
        echo "</span>
                            <span class=\"title\">Salles</span>
                        </p>
                    </div>
                </div>
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-cubes\"></i></span>
                        <p>
                            <span class=\"number\">";
        // line 46
        echo twig_escape_filter($this->env, (isset($context["classes"]) || array_key_exists("classes", $context) ? $context["classes"] : (function () { throw new RuntimeError('Variable "classes" does not exist.', 46, $this->source); })()), "html", null, true);
        echo "</span>
                            <span class=\"title\">Classes</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/dashboard/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 46,  130 => 37,  118 => 28,  106 => 19,  94 => 10,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Scheduler: Espace administration{% endblock %}

{% block content %}
    <div class=\"panel panel-headline\">
        <div class=\"panel-heading\">
            <h3 class=\"panel-title\">Tableau de bord</h3>
            <p class=\"panel-subtitle\">
                Le: {{ 'now'|date('d/m/Y à H:i') }}
            </p>
        </div>
        <div class=\"panel-body\">
            <div class=\"row\">
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-briefcase\"></i></span>
                        <p>
                            <span class=\"number\">{{teachers}}</span>
                            <span class=\"title\">Enseignants</span>
                        </p>
                    </div>
                </div>
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-users\"></i></span>
                        <p>
                            <span class=\"number\">{{students}}</span>
                            <span class=\"title\">Etudiants</span>
                        </p>
                    </div>
                </div>
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-building\"></i></span>
                        <p>
                            <span class=\"number\">{{halls}}</span>
                            <span class=\"title\">Salles</span>
                        </p>
                    </div>
                </div>
                <div class=\"col-md-3\">
                    <div class=\"metric\">
                        <span class=\"icon\"><i class=\"fa fa-cubes\"></i></span>
                        <p>
                            <span class=\"number\">{{classes}}</span>
                            <span class=\"title\">Classes</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{% endblock %}
", "admin/dashboard/index.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\dashboard\\index.html.twig");
    }
}
