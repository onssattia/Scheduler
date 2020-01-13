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

/* admin/schedule/index.html.twig */
class __TwigTemplate_f626dff05d4ea4fd3a370aa4896af3671e47aed27e94499de131e1bae2653e94 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/schedule/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/schedule/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/schedule/index.html.twig", 1);
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

        echo "Scheduler: liste des emplois de temps";
        
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
        echo "    <div class=\"row\">
        <div class=\"col-md-12\">
            <h1>Liste des emplois de temps</h1>
            <hr/>
            ";
        // line 10
        $this->loadTemplate("common/flash_message.html.twig", "admin/schedule/index.html.twig", 10)->display($context);
        // line 11
        echo "            <div class=\"text-right margin-bottom-30\">
                <a href=\"";
        // line 12
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("schedule_new");
        echo "\" class=\"btn btn-primary\">
                    Créer une nouveau emploi
                </a>
            </div>
            <table class=\"table table-bordered table-condensed table-striped\">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Classe</th>
                    <th>Nom</th>
                    <th>Année</th>
                </tr>
                </thead>
                <tbody>
                ";
        // line 26
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["schedules"]) || array_key_exists("schedules", $context) ? $context["schedules"] : (function () { throw new RuntimeError('Variable "schedules" does not exist.', 26, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["schedule"]) {
            // line 27
            echo "                    <tr>
                        <td>
                            ";
            // line 29
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["schedule"], "id", [], "any", false, false, false, 29), "html", null, true);
            echo "
                        </td>
                        <td>";
            // line 31
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["schedule"], "classRoom", [], "any", false, false, false, 31), "name", [], "any", false, false, false, 31), "html", null, true);
            echo "</td>
                        <td>";
            // line 32
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["schedule"], "name", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>
                        <td>";
            // line 33
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["schedule"], "year", [], "any", false, false, false, 33), "html", null, true);
            echo "</td>
                        <td>
                            <ul class=\"list-inline\">
                                <li>
                                    <a href=\"";
            // line 37
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("schedule_show", ["id" => twig_get_attribute($this->env, $this->source, $context["schedule"], "id", [], "any", false, false, false, 37)]), "html", null, true);
            echo "\" class=\"btn btn-default\">
                                        <i class=\"lnr lnr-eye\"></i> Consulter l'emploi
                                    </a>
                                </li>
                                <li>
                                    <a href=\"";
            // line 42
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("schedule_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["schedule"], "id", [], "any", false, false, false, 42)]), "html", null, true);
            echo "\" class=\"btn btn-success\">
                                        <i class=\"lnr lnr-pencil\"></i> Modifier
                                    </a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 50
            echo "                    <tr>
                        <td colspan=\"6\">
                            <div class=\"text-center\">
                                <span class=\"text-info\">
                                    Aucun emploi de temps n'est enregistrée
                                </span>
                            </div>
                        </td>
                    </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['schedule'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 60
        echo "                </tbody>
            </table>


        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/schedule/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  181 => 60,  166 => 50,  153 => 42,  145 => 37,  138 => 33,  134 => 32,  130 => 31,  125 => 29,  121 => 27,  116 => 26,  99 => 12,  96 => 11,  94 => 10,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Scheduler: liste des emplois de temps{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-md-12\">
            <h1>Liste des emplois de temps</h1>
            <hr/>
            {% include 'common/flash_message.html.twig' %}
            <div class=\"text-right margin-bottom-30\">
                <a href=\"{{ path('schedule_new') }}\" class=\"btn btn-primary\">
                    Créer une nouveau emploi
                </a>
            </div>
            <table class=\"table table-bordered table-condensed table-striped\">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Classe</th>
                    <th>Nom</th>
                    <th>Année</th>
                </tr>
                </thead>
                <tbody>
                {% for schedule in schedules %}
                    <tr>
                        <td>
                            {{ schedule.id }}
                        </td>
                        <td>{{ schedule.classRoom.name }}</td>
                        <td>{{ schedule.name }}</td>
                        <td>{{ schedule.year }}</td>
                        <td>
                            <ul class=\"list-inline\">
                                <li>
                                    <a href=\"{{ path('schedule_show', {'id': schedule.id}) }}\" class=\"btn btn-default\">
                                        <i class=\"lnr lnr-eye\"></i> Consulter l'emploi
                                    </a>
                                </li>
                                <li>
                                    <a href=\"{{ path('schedule_edit', {'id': schedule.id}) }}\" class=\"btn btn-success\">
                                        <i class=\"lnr lnr-pencil\"></i> Modifier
                                    </a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                {% else %}
                    <tr>
                        <td colspan=\"6\">
                            <div class=\"text-center\">
                                <span class=\"text-info\">
                                    Aucun emploi de temps n'est enregistrée
                                </span>
                            </div>
                        </td>
                    </tr>
                {% endfor %}
                </tbody>
            </table>


        </div>
    </div>
{% endblock %}
", "admin/schedule/index.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\schedule\\index.html.twig");
    }
}
