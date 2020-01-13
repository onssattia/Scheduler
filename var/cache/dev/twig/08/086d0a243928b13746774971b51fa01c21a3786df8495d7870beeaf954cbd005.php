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

/* admin/teacher/show.html.twig */
class __TwigTemplate_79fe3a6f528358dcfcb859a4a080e26f84a39d9e509f3818db9818bf3ea12ecb extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/teacher/show.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/teacher/show.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/teacher/show.html.twig", 1);
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

        echo "Teacher";
        
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
            <h1>Fiche enseignant</h1>
            <hr/>
            ";
        // line 10
        $this->loadTemplate("common/flash_message.html.twig", "admin/teacher/show.html.twig", 10)->display($context);
        // line 11
        echo "            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"";
        // line 14
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("teacher_index");
        echo "\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"";
        // line 19
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("teacher_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 19, $this->source); })()), "id", [], "any", false, false, false, 19)]), "html", null, true);
        echo "\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>


                    </li>
                    <li>
                        ";
        // line 26
        echo twig_include($this->env, $context, "admin/teacher/_delete_form.html.twig");
        echo "
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <table class=\"table table-condensed table-bordered table-striped\">
                <tbody>
                <tr>
                    <th>Id</th>
                    <td>";
        // line 38
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 38, $this->source); })()), "id", [], "any", false, false, false, 38), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Cin</th>
                    <td>";
        // line 42
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 42, $this->source); })()), "cin", [], "any", false, false, false, 42), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Prénom</th>
                    <td>";
        // line 46
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 46, $this->source); })()), "firstName", [], "any", false, false, false, 46), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Nom</th>
                    <td>";
        // line 50
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 50, $this->source); })()), "lastName", [], "any", false, false, false, 50), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Matricule</th>
                    <td>";
        // line 54
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 54, $this->source); })()), "matricule", [], "any", false, false, false, 54), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Adresse e-mail</th>
                    <td>";
        // line 58
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 58, $this->source); })()), "email", [], "any", false, false, false, 58), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Tél: </th>
                    <td>";
        // line 62
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 62, $this->source); })()), "phoneNumber", [], "any", false, false, false, 62), "html", null, true);
        echo "</td>
                </tr>

                <tr>
                    <th>Sexe</th>
                    <td>";
        // line 67
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 67, $this->source); })()), "sexe", [], "any", false, false, false, 67), "html", null, true);
        echo "</td>
                </tr>

                <tr>
                    <th>Address</th>
                    <td>";
        // line 72
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 72, $this->source); })()), "address", [], "any", false, false, false, 72), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>ZipCode</th>
                    <td>";
        // line 76
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 76, $this->source); })()), "zipCode", [], "any", false, false, false, 76), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>";
        // line 80
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 80, $this->source); })()), "city", [], "any", false, false, false, 80), "html", null, true);
        echo "</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>";
        // line 84
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["teacher"]) || array_key_exists("teacher", $context) ? $context["teacher"] : (function () { throw new RuntimeError('Variable "teacher" does not exist.', 84, $this->source); })()), "country", [], "any", false, false, false, 84), "html", null, true);
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
        return "admin/teacher/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  213 => 84,  206 => 80,  199 => 76,  192 => 72,  184 => 67,  176 => 62,  169 => 58,  162 => 54,  155 => 50,  148 => 46,  141 => 42,  134 => 38,  119 => 26,  109 => 19,  101 => 14,  96 => 11,  94 => 10,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Teacher{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <h1>Fiche enseignant</h1>
            <hr/>
            {% include 'common/flash_message.html.twig' %}
            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"{{ path('teacher_index') }}\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"{{ path('teacher_edit', {'id': teacher.id}) }}\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>


                    </li>
                    <li>
                        {{ include('admin/teacher/_delete_form.html.twig') }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <table class=\"table table-condensed table-bordered table-striped\">
                <tbody>
                <tr>
                    <th>Id</th>
                    <td>{{ teacher.id }}</td>
                </tr>
                <tr>
                    <th>Cin</th>
                    <td>{{ teacher.cin }}</td>
                </tr>
                <tr>
                    <th>Prénom</th>
                    <td>{{ teacher.firstName }}</td>
                </tr>
                <tr>
                    <th>Nom</th>
                    <td>{{ teacher.lastName }}</td>
                </tr>
                <tr>
                    <th>Matricule</th>
                    <td>{{ teacher.matricule }}</td>
                </tr>
                <tr>
                    <th>Adresse e-mail</th>
                    <td>{{ teacher.email }}</td>
                </tr>
                <tr>
                    <th>Tél: </th>
                    <td>{{ teacher.phoneNumber }}</td>
                </tr>

                <tr>
                    <th>Sexe</th>
                    <td>{{ teacher.sexe }}</td>
                </tr>

                <tr>
                    <th>Address</th>
                    <td>{{ teacher.address }}</td>
                </tr>
                <tr>
                    <th>ZipCode</th>
                    <td>{{ teacher.zipCode }}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{{ teacher.city }}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{{ teacher.country }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
{% endblock %}
", "admin/teacher/show.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\teacher\\show.html.twig");
    }
}
