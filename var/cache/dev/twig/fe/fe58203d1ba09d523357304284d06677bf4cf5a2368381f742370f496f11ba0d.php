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

/* admin/class_room/show.html.twig */
class __TwigTemplate_df2f9f182ecd7d3530f3417e9fc91aa855bb1af1bd05040eb3b426a4cdf0a57c extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/class_room/show.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/class_room/show.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/class_room/show.html.twig", 1);
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

        echo "Scheduler: fiche classe";
        
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
            <h1>Fiche classe</h1> <hr/>
            ";
        // line 9
        $this->loadTemplate("common/flash_message.html.twig", "admin/class_room/show.html.twig", 9)->display($context);
        // line 10
        echo "            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"";
        // line 13
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("class_room_index");
        echo "\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"";
        // line 18
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("class_room_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["class_room"]) || array_key_exists("class_room", $context) ? $context["class_room"] : (function () { throw new RuntimeError('Variable "class_room" does not exist.', 18, $this->source); })()), "id", [], "any", false, false, false, 18)]), "html", null, true);
        echo "\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>


                    </li>
                    <li>
                        ";
        // line 25
        echo twig_include($this->env, $context, "admin/class_room/_delete_form.html.twig");
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
        // line 38
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["class_room"]) || array_key_exists("class_room", $context) ? $context["class_room"] : (function () { throw new RuntimeError('Variable "class_room" does not exist.', 38, $this->source); })()), "id", [], "any", false, false, false, 38), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Nom</th>
                    <td>";
        // line 42
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["class_room"]) || array_key_exists("class_room", $context) ? $context["class_room"] : (function () { throw new RuntimeError('Variable "class_room" does not exist.', 42, $this->source); })()), "name", [], "any", false, false, false, 42), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Nom complet</th>
                    <td>";
        // line 46
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["class_room"]) || array_key_exists("class_room", $context) ? $context["class_room"] : (function () { throw new RuntimeError('Variable "class_room" does not exist.', 46, $this->source); })()), "fullName", [], "any", false, false, false, 46), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Nombre des étudiants</th>
                    <td>";
        // line 50
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["class_room"]) || array_key_exists("class_room", $context) ? $context["class_room"] : (function () { throw new RuntimeError('Variable "class_room" does not exist.', 50, $this->source); })()), "studentsNumber", [], "any", false, false, false, 50), "html", null, true);
        echo "</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/class_room/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  155 => 50,  148 => 46,  141 => 42,  134 => 38,  118 => 25,  108 => 18,  100 => 13,  95 => 10,  93 => 9,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Scheduler: fiche classe{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <h1>Fiche classe</h1> <hr/>
            {% include 'common/flash_message.html.twig' %}
            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"{{ path('class_room_index') }}\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"{{ path('class_room_edit', {'id': class_room.id}) }}\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>


                    </li>
                    <li>
                        {{ include('admin/class_room/_delete_form.html.twig') }}
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
                    <td>{{ class_room.id }}</td>
                </tr>
                <tr>
                    <th>Nom</th>
                    <td>{{ class_room.name }}</td>
                </tr>
                <tr>
                    <th>Nom complet</th>
                    <td>{{ class_room.fullName }}</td>
                </tr>
                <tr>
                    <th>Nombre des étudiants</th>
                    <td>{{ class_room.studentsNumber }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
{% endblock %}
", "admin/class_room/show.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\class_room\\show.html.twig");
    }
}
