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

/* admin/schedule/show.html.twig */
class __TwigTemplate_10cf325ac6222eb79723efd0a6380df98eee7e53b35c767de1a19548b366da76 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/schedule/show.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/schedule/show.html.twig"));

        // line 2
        $this->env->getRuntime("Symfony\\Component\\Form\\FormRenderer")->setTheme((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 2, $this->source); })()), [0 => "bootstrap_3_layout.html.twig"], true);
        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "admin/schedule/show.html.twig", 1);
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
            <h1>Fiche emploi de temps</h1> <hr/>
            ";
        // line 9
        $this->loadTemplate("common/flash_message.html.twig", "admin/schedule/show.html.twig", 9)->display($context);
        // line 10
        echo "            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"";
        // line 13
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("schedule_index");
        echo "\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"";
        // line 18
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("schedule_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 18, $this->source); })()), "id", [], "any", false, false, false, 18)]), "html", null, true);
        echo "\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>
                    </li>
                    <li>
                        ";
        // line 23
        echo twig_include($this->env, $context, "admin/schedule/_delete_form.html.twig");
        echo "
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-xs-12\">

            <table class=\"table table-bordered table-striped\">
                <tbody>
                <tr>
                    <th>Id</th>
                    <td>";
        // line 36
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 36, $this->source); })()), "id", [], "any", false, false, false, 36), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Classe</th>
                    <td>";
        // line 40
        echo twig_escape_filter($this->env, (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 40, $this->source); })()), "classRoom", [], "any", false, false, false, 40), "name", [], "any", false, false, false, 40) . " (") . twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 40, $this->source); })()), "classRoom", [], "any", false, false, false, 40), "fullName", [], "any", false, false, false, 40)) . ")"), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Nom</th>
                    <td>";
        // line 44
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 44, $this->source); })()), "name", [], "any", false, false, false, 44), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Année</th>
                    <td>";
        // line 48
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 48, $this->source); })()), "year", [], "any", false, false, false, 48), "html", null, true);
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
                    <div class=\"pull-right margin-bottom-30\">
                        <a href=\"javascript:\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#sessionModal\">
                            Renseigner l'emploi
                        </a>
                    </div>
                    <table class=\"table table-bordered table-hover\">
                        <thead>
                        <tr>
                            <th colspan=\"7\">
                                <div class=\"text-center\">
                                    Emploi de temps ";
        // line 70
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true);
        echo "
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th colspan=\"7\">
                                <div class=\"text-center\">
                                    ";
        // line 77
        echo twig_escape_filter($this->env, (((twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 77, $this->source); })()), "classRoom", [], "any", false, false, false, 77), "name", [], "any", false, false, false, 77)) . " (") . twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["schedule"]) || array_key_exists("schedule", $context) ? $context["schedule"] : (function () { throw new RuntimeError('Variable "schedule" does not exist.', 77, $this->source); })()), "classRoom", [], "any", false, false, false, 77), "fullName", [], "any", false, false, false, 77)) . ") "), "html", null, true);
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
        // line 104
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["sessions"]) || array_key_exists("sessions", $context) ? $context["sessions"] : (function () { throw new RuntimeError('Variable "sessions" does not exist.', 104, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["key"] => $context["sessionsByDay"]) {
            // line 105
            echo "                                    <td>
                                        <table class=\"table table-bordered\">
                                            ";
            // line 107
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($context["sessionsByDay"]);
            foreach ($context['_seq'] as $context["_key"] => $context["session"]) {
                // line 108
                echo "                                                ";
                $context["teacher"] = twig_get_attribute($this->env, $this->source, $context["session"], "teacher", [], "any", false, false, false, 108);
                // line 109
                echo "                                                ";
                $context["subject"] = twig_get_attribute($this->env, $this->source, $context["session"], "subject", [], "any", false, false, false, 109);
                // line 110
                echo "                                                ";
                $context["hall"] = twig_get_attribute($this->env, $this->source, $context["session"], "hall", [], "any", false, false, false, 110);
                // line 111
                echo "                                                <tr>
                                                    <td>
                                                        ";
                // line 113
                echo twig_escape_filter($this->env, ((twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["session"], "startTime", [], "any", false, false, false, 113), "H:i") . " - ") . twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["session"], "endTime", [], "any", false, false, false, 113), "H:i")), "html", null, true);
                echo "
                                                    </td>
                                                    <td>
                                                        <b>Prof:</b> ";
                // line 116
                echo twig_escape_filter($this->env, (((((0 === twig_compare(twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 116, $this->source); })()), "sexe", [], "any", false, false, false, 116), "H")) ? ("M. ") : ("Mme. ")) . twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 116, $this->source); })()), "firstName", [], "any", false, false, false, 116))) . " ") . twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 116, $this->source); })()), "lastName", [], "any", false, false, false, 116))), "html", null, true);
                echo "<br/>
                                                        <b>Salle:</b> ";
                // line 117
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 117, $this->source); })()), "name", [], "any", false, false, false, 117), "html", null, true);
                echo "<br/>
                                                        <b>Mat:</b> ";
                // line 118
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["subject"]) || array_key_exists("subject", $context) ? $context["subject"] : (function () { throw new RuntimeError('Variable "subject" does not exist.', 118, $this->source); })()), "name", [], "any", false, false, false, 118), "html", null, true);
                echo "
                                                    </td>
                                                </tr>
                                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['session'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 122
            echo "                                        </table>
                                    </td>
                                    ";
            $context['_iterated'] = true;
        }
        if (!$context['_iterated']) {
            // line 125
            echo "                                        <td colspan=\"6\">
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
        // line 133
        echo "                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id=\"sessionModal\" class=\"modal fade\" role=\"dialog\" data-submitted=\"";
        // line 142
        echo (((isset($context["submitted"]) || array_key_exists("submitted", $context) ? $context["submitted"] : (function () { throw new RuntimeError('Variable "submitted" does not exist.', 142, $this->source); })())) ? ("true") : ("false"));
        echo "\">
        ";
        // line 143
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 143, $this->source); })()), 'form_start', ["attr" => ["novalidate" => "novalidate"]]);
        echo "
        <div class=\"modal-dialog\">
            <!-- Modal content-->
            <div class=\"modal-content\">
                <div class=\"modal-header\">
                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>
                    <h4 class=\"modal-title\">
                        Nouvelle séance
                    </h4>
                </div>
                <div class=\"modal-body\">

                    ";
        // line 155
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 155, $this->source); })())) {
            // line 156
            echo "                        <div class=\"alert alert-danger alert-dismissible\">
                            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>
                            ";
            // line 158
            echo twig_escape_filter($this->env, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 158, $this->source); })()), "html", null, true);
            echo "
                        </div>
                    ";
        }
        // line 161
        echo "
                    ";
        // line 162
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 162, $this->source); })()), 'widget');
        echo "

                </div>
                <div class=\"modal-footer\">
                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Annuler</button>
                    <button type=\"submit\" class=\"btn btn-primary\" >Enregistrer</button>
                </div>
            </div>
        </div>
        ";
        // line 171
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 171, $this->source); })()), 'form_end');
        echo "
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/schedule/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  348 => 171,  336 => 162,  333 => 161,  327 => 158,  323 => 156,  321 => 155,  306 => 143,  302 => 142,  291 => 133,  278 => 125,  271 => 122,  261 => 118,  257 => 117,  253 => 116,  247 => 113,  243 => 111,  240 => 110,  237 => 109,  234 => 108,  230 => 107,  226 => 105,  221 => 104,  191 => 77,  181 => 70,  156 => 48,  149 => 44,  142 => 40,  135 => 36,  119 => 23,  111 => 18,  103 => 13,  98 => 10,  96 => 9,  91 => 6,  81 => 5,  62 => 3,  51 => 1,  49 => 2,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% form_theme form 'bootstrap_3_layout.html.twig' %}
{% block title %}Schedule{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <h1>Fiche emploi de temps</h1> <hr/>
            {% include 'common/flash_message.html.twig' %}
            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"{{ path('schedule_index') }}\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"{{ path('schedule_edit', {'id': schedule.id}) }}\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>
                    </li>
                    <li>
                        {{ include('admin/schedule/_delete_form.html.twig') }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-xs-12\">

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
                    <div class=\"pull-right margin-bottom-30\">
                        <a href=\"javascript:\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#sessionModal\">
                            Renseigner l'emploi
                        </a>
                    </div>
                    <table class=\"table table-bordered table-hover\">
                        <thead>
                        <tr>
                            <th colspan=\"7\">
                                <div class=\"text-center\">
                                    Emploi de temps {{ 'now'|date('Y') }}
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
        </div>
    </div>

    <!-- Modal -->
    <div id=\"sessionModal\" class=\"modal fade\" role=\"dialog\" data-submitted=\"{{ submitted ? 'true' : 'false' }}\">
        {{ form_start(form, {'attr': {'novalidate': 'novalidate'}}) }}
        <div class=\"modal-dialog\">
            <!-- Modal content-->
            <div class=\"modal-content\">
                <div class=\"modal-header\">
                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>
                    <h4 class=\"modal-title\">
                        Nouvelle séance
                    </h4>
                </div>
                <div class=\"modal-body\">

                    {% if error %}
                        <div class=\"alert alert-danger alert-dismissible\">
                            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>
                            {{error}}
                        </div>
                    {% endif %}

                    {{ form_widget(form) }}

                </div>
                <div class=\"modal-footer\">
                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Annuler</button>
                    <button type=\"submit\" class=\"btn btn-primary\" >Enregistrer</button>
                </div>
            </div>
        </div>
        {{ form_end(form) }}
    </div>
{% endblock %}", "admin/schedule/show.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\schedule\\show.html.twig");
    }
}
