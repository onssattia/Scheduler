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

/* student/index.html.twig */
class __TwigTemplate_3dda8c4ab0dba95752ff98c85b860fb2b26468856df5cc32f630a0697375bb68 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "student/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "student/index.html.twig"));

        // line 2
        $this->env->getRuntime("Symfony\\Component\\Form\\FormRenderer")->setTheme((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 2, $this->source); })()), [0 => "bootstrap_3_layout.html.twig"], true);
        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "student/index.html.twig", 1);
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

        echo "Schedule";
        
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
        <div class=\"col-xs-12\">
            <h1>Fiche emploi de temps / classe</h1>
            <hr/>
            ";
        // line 10
        $this->loadTemplate("common/flash_message.html.twig", "student/index.html.twig", 10)->display($context);
        // line 11
        echo "        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-xl-4 col-xl-offset-4 col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2\">
            ";
        // line 15
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 15, $this->source); })()), 'form_start', ["attr" => ["novalidate" => "novalidate"]]);
        echo "
                ";
        // line 16
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 16, $this->source); })()), 'widget');
        echo "
                <div class=\"form-group text-right\">
                    <button class=\"btn btn-success\">
                        <i class=\"lnr lnr-calendar-full\"></i> Afficher l'emploi
                    </button>
                </div>
            ";
        // line 22
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 22, $this->source); })()), 'rest');
        echo "
            ";
        // line 23
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 23, $this->source); })()), 'form_end');
        echo "
        </div>
        <div class=\"col-xs-12\">

            ";
        // line 27
        if ((isset($context["sessions"]) || array_key_exists("sessions", $context))) {
            // line 28
            echo "
                <table class=\"table table-bordered table-striped\">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <td>";
            // line 33
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 33, $this->source); })()), "id", [], "any", false, false, false, 33), "html", null, true);
            echo "</td>
                    </tr>
                    <tr>
                        <th>Classe</th>
                        <td>";
            // line 37
            echo twig_escape_filter($this->env, (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 37, $this->source); })()), "classRoom", [], "any", false, false, false, 37), "name", [], "any", false, false, false, 37) . " (") . twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 37, $this->source); })()), "classRoom", [], "any", false, false, false, 37), "fullName", [], "any", false, false, false, 37)) . ")"), "html", null, true);
            echo "</td>
                    </tr>
                    <tr>
                        <th>Nom</th>
                        <td>";
            // line 41
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 41, $this->source); })()), "name", [], "any", false, false, false, 41), "html", null, true);
            echo "</td>
                    </tr>
                    <tr>
                        <th>Année</th>
                        <td>";
            // line 45
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 45, $this->source); })()), "year", [], "any", false, false, false, 45), "html", null, true);
            echo "</td>
                    </tr>
                    </tbody>
                </table>

                <div class=\"panel panel-info\">
                    <div class=\"panel-heading\">
                        <h5 class=\"panel-title\">
                            Détails emploi
                        </h5>
                    </div>
                    <div class=\"panel-body\">
                        <table class=\"table table-bordered table-hover\">
                            <thead>
                            <tr>
                                <th colspan=\"7\">
                                    <div class=\"text-center\">
                                        Emploi de temps
                                        - ";
            // line 63
            echo twig_escape_filter($this->env, ((twig_date_format_filter($this->env, twig_date_modify_filter($this->env, "now", "-1 year"), "Y") . "/") . twig_date_format_filter($this->env, "now", "Y")), "html", null, true);
            echo " -
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th colspan=\"7\">
                                    <div class=\"text-center\">
                                        ";
            // line 70
            echo twig_escape_filter($this->env, (((twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 70, $this->source); })()), "classRoom", [], "any", false, false, false, 70), "name", [], "any", false, false, false, 70)) . " (") . twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 70, $this->source); })()), "classRoom", [], "any", false, false, false, 70), "fullName", [], "any", false, false, false, 70)) . ") "), "html", null, true);
            echo "
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Lundi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Mardi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Mercredi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Jeudi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Vendredi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Samedi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                ";
            // line 97
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["sessions"]) || array_key_exists("sessions", $context) ? $context["sessions"] : (function () { throw new RuntimeError('Variable "sessions" does not exist.', 97, $this->source); })()));
            $context['_iterated'] = false;
            foreach ($context['_seq'] as $context["key"] => $context["sessionsByDay"]) {
                // line 98
                echo "                                    <td>
                                        <table class=\"table table-bordered\">
                                            ";
                // line 100
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($context["sessionsByDay"]);
                foreach ($context['_seq'] as $context["_key"] => $context["session"]) {
                    // line 101
                    echo "                                                ";
                    $context["teacher"] = twig_get_attribute($this->env, $this->source, $context["session"], "teacher", [], "any", false, false, false, 101);
                    // line 102
                    echo "                                                ";
                    $context["subject"] = twig_get_attribute($this->env, $this->source, $context["session"], "subject", [], "any", false, false, false, 102);
                    // line 103
                    echo "                                                ";
                    $context["hall"] = twig_get_attribute($this->env, $this->source, $context["session"], "hall", [], "any", false, false, false, 103);
                    // line 104
                    echo "                                                <tr>
                                                    <td>
                                                        ";
                    // line 106
                    echo twig_escape_filter($this->env, ((twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["session"], "startTime", [], "any", false, false, false, 106), "H:i") . " - ") . twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["session"], "endTime", [], "any", false, false, false, 106), "H:i")), "html", null, true);
                    echo "
                                                    </td>
                                                    <td>
                                                        <b>Prof:</b> ";
                    // line 109
                    echo twig_escape_filter($this->env, (((((0 === twig_compare(twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 109, $this->source); })()), "sexe", [], "any", false, false, false, 109), "H")) ? ("M. ") : ("Mme. ")) . twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 109, $this->source); })()), "firstName", [], "any", false, false, false, 109))) . " ") . twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 109, $this->source); })()), "lastName", [], "any", false, false, false, 109))), "html", null, true);
                    echo "<br/>
                                                        <b>Salle:</b> ";
                    // line 110
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 110, $this->source); })()), "name", [], "any", false, false, false, 110), "html", null, true);
                    echo "<br/>
                                                        <b>Mat:</b> ";
                    // line 111
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["subject"]) || array_key_exists("subject", $context) ? $context["subject"] : (function () { throw new RuntimeError('Variable "subject" does not exist.', 111, $this->source); })()), "name", [], "any", false, false, false, 111), "html", null, true);
                    echo "
                                                    </td>
                                                </tr>
                                            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['session'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 115
                echo "                                        </table>
                                    </td>
                                ";
                $context['_iterated'] = true;
            }
            if (!$context['_iterated']) {
                // line 118
                echo "                                    <td colspan=\"6\">
                                        <div class=\"text-center\">
                                                <span class=\"text-info\">
                                                    Cet emploi n'est pas configuré
                                                </span>
                                        </div>
                                    </td>
                                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['sessionsByDay'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 126
            echo "                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ";
        }
        // line 132
        echo "        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "student/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  298 => 132,  290 => 126,  277 => 118,  270 => 115,  260 => 111,  256 => 110,  252 => 109,  246 => 106,  242 => 104,  239 => 103,  236 => 102,  233 => 101,  229 => 100,  225 => 98,  220 => 97,  190 => 70,  180 => 63,  159 => 45,  152 => 41,  145 => 37,  138 => 33,  131 => 28,  129 => 27,  122 => 23,  118 => 22,  109 => 16,  105 => 15,  99 => 11,  97 => 10,  91 => 6,  81 => 5,  62 => 3,  51 => 1,  49 => 2,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% form_theme form 'bootstrap_3_layout.html.twig' %}
{% block title %}Schedule{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <h1>Fiche emploi de temps / classe</h1>
            <hr/>
            {% include 'common/flash_message.html.twig' %}
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-xl-4 col-xl-offset-4 col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2\">
            {{ form_start(form, {'attr': {'novalidate': 'novalidate'}}) }}
                {{ form_widget(form) }}
                <div class=\"form-group text-right\">
                    <button class=\"btn btn-success\">
                        <i class=\"lnr lnr-calendar-full\"></i> Afficher l'emploi
                    </button>
                </div>
            {{ form_rest(form) }}
            {{ form_end(form) }}
        </div>
        <div class=\"col-xs-12\">

            {% if sessions is defined %}

                <table class=\"table table-bordered table-striped\">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <td>{{ schedule.id }}</td>
                    </tr>
                    <tr>
                        <th>Classe</th>
                        <td>{{ schedule.classRoom.name ~ ' (' ~ schedule.classRoom.fullName ~ ')' }}</td>
                    </tr>
                    <tr>
                        <th>Nom</th>
                        <td>{{ schedule.name }}</td>
                    </tr>
                    <tr>
                        <th>Année</th>
                        <td>{{ schedule.year }}</td>
                    </tr>
                    </tbody>
                </table>

                <div class=\"panel panel-info\">
                    <div class=\"panel-heading\">
                        <h5 class=\"panel-title\">
                            Détails emploi
                        </h5>
                    </div>
                    <div class=\"panel-body\">
                        <table class=\"table table-bordered table-hover\">
                            <thead>
                            <tr>
                                <th colspan=\"7\">
                                    <div class=\"text-center\">
                                        Emploi de temps
                                        - {{ 'now'|date_modify('-1 year')|date('Y') ~ '/' ~ 'now'|date('Y') }} -
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th colspan=\"7\">
                                    <div class=\"text-center\">
                                        {{ schedule.classRoom.name|upper ~ ' (' ~ schedule.classRoom.fullName ~ ') ' }}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Lundi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Mardi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Mercredi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Jeudi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Vendredi
                                </th>
                                <th class=\"bg-warning\" width=\"18%\">
                                    Samedi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {% for key, sessionsByDay in sessions %}
                                    <td>
                                        <table class=\"table table-bordered\">
                                            {% for session in sessionsByDay %}
                                                {% set teacher = session.teacher %}
                                                {% set subject = session.subject %}
                                                {% set hall = session.hall %}
                                                <tr>
                                                    <td>
                                                        {{ session.startTime|date('H:i') ~ ' - ' ~ session.endTime|date('H:i') }}
                                                    </td>
                                                    <td>
                                                        <b>Prof:</b> {{  (teacher.sexe == 'H' ? 'M. ' : 'Mme. ') ~ teacher.firstName|capitalize ~ ' ' ~ teacher.lastName|upper }}<br/>
                                                        <b>Salle:</b> {{ hall.name }}<br/>
                                                        <b>Mat:</b> {{  subject.name }}
                                                    </td>
                                                </tr>
                                            {% endfor %}
                                        </table>
                                    </td>
                                {% else %}
                                    <td colspan=\"6\">
                                        <div class=\"text-center\">
                                                <span class=\"text-info\">
                                                    Cet emploi n'est pas configuré
                                                </span>
                                        </div>
                                    </td>
                                {% endfor %}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            {% endif %}
        </div>
    </div>
{% endblock %}", "student/index.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\student\\index.html.twig");
    }
}
