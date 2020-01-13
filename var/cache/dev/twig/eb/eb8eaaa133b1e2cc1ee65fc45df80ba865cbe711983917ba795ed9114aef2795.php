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

/* admin/teacher/index.html.twig */
class __TwigTemplate_5dd34f443b2709b8e58a1c3acb59643c254672e8709e3f5023e9d6bce9e19125 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/teacher/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/teacher/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/teacher/index.html.twig", 1);
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

        echo "Scheduler: liste des enseignants";
        
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
        echo "<div class=\"row\">
    <div class=\"col-md-12\">
        <h1>Liste des enseignants</h1>
        <hr/>
        ";
        // line 10
        $this->loadTemplate("common/flash_message.html.twig", "admin/teacher/index.html.twig", 10)->display($context);
        // line 11
        echo "        <div class=\"text-right margin-bottom-30\">
            <a href=\"";
        // line 12
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("teacher_new");
        echo "\" class=\"btn btn-primary\">
                Ajouter un enseignant
            </a>
        </div>

        <table class=\"table table-striped table-bordered table-condensed\">
            <thead>
            <tr>
                <th>CIN</th>
                <th>Matricule</th>
                <th>Nom & Prénom</th>
                <th>Email</th>
                <th>Tél</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            ";
        // line 29
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["teachers"]) || array_key_exists("teachers", $context) ? $context["teachers"] : (function () { throw new RuntimeError('Variable "teachers" does not exist.', 29, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["teacher"]) {
            // line 30
            echo "                <tr>
                    <td>";
            // line 31
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["teacher"], "cin", [], "any", false, false, false, 31), "html", null, true);
            echo "</td>
                    <td>";
            // line 32
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["teacher"], "matricule", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>
                    <td>";
            // line 33
            echo twig_escape_filter($this->env, ((twig_upper_filter($this->env, twig_get_attribute($this->env, $this->source, $context["teacher"], "lastName", [], "any", false, false, false, 33)) . " ") . twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["teacher"], "firstName", [], "any", false, false, false, 33))), "html", null, true);
            echo "</td>
                    <td>";
            // line 34
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["teacher"], "email", [], "any", false, false, false, 34), "html", null, true);
            echo "</td>
                    <td>";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["teacher"], "phoneNumber", [], "any", false, false, false, 35), "html", null, true);
            echo "</td>
                    <td>
                       <ul class=\"list-inline\">
                           <li>
                               <a href=\"";
            // line 39
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("teacher_show", ["id" => twig_get_attribute($this->env, $this->source, $context["teacher"], "id", [], "any", false, false, false, 39)]), "html", null, true);
            echo "\" class=\"btn btn-default\">
                                   <i class=\"lnr lnr-eye\"></i> Consulter
                               </a>

                           </li>
                           <li>
                               <a href=\"";
            // line 45
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("teacher_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["teacher"], "id", [], "any", false, false, false, 45)]), "html", null, true);
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
            // line 53
            echo "                <tr>
                    <td colspan=\"13\">
                        <div class=\"text-center\">
                            <span class=\"text-info\">
                                Aucun enseignant n'est enregistrée
                            </span>
                        </div>
                    </td>
                </tr>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['teacher'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 63
        echo "            </tbody>
        </table>

    </div>
</div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/teacher/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  187 => 63,  172 => 53,  159 => 45,  150 => 39,  143 => 35,  139 => 34,  135 => 33,  131 => 32,  127 => 31,  124 => 30,  119 => 29,  99 => 12,  96 => 11,  94 => 10,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Scheduler: liste des enseignants{% endblock %}

{% block content %}
<div class=\"row\">
    <div class=\"col-md-12\">
        <h1>Liste des enseignants</h1>
        <hr/>
        {% include 'common/flash_message.html.twig' %}
        <div class=\"text-right margin-bottom-30\">
            <a href=\"{{ path('teacher_new') }}\" class=\"btn btn-primary\">
                Ajouter un enseignant
            </a>
        </div>

        <table class=\"table table-striped table-bordered table-condensed\">
            <thead>
            <tr>
                <th>CIN</th>
                <th>Matricule</th>
                <th>Nom & Prénom</th>
                <th>Email</th>
                <th>Tél</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {% for teacher in teachers %}
                <tr>
                    <td>{{ teacher.cin }}</td>
                    <td>{{ teacher.matricule }}</td>
                    <td>{{ teacher.lastName|upper ~ ' ' ~ teacher.firstName|capitalize  }}</td>
                    <td>{{ teacher.email }}</td>
                    <td>{{ teacher.phoneNumber }}</td>
                    <td>
                       <ul class=\"list-inline\">
                           <li>
                               <a href=\"{{ path('teacher_show', {'id': teacher.id}) }}\" class=\"btn btn-default\">
                                   <i class=\"lnr lnr-eye\"></i> Consulter
                               </a>

                           </li>
                           <li>
                               <a href=\"{{ path('teacher_edit', {'id': teacher.id}) }}\" class=\"btn btn-success\">
                                   <i class=\"lnr lnr-pencil\"></i> Modifier
                               </a>
                           </li>
                       </ul>
                    </td>
                </tr>
            {% else %}
                <tr>
                    <td colspan=\"13\">
                        <div class=\"text-center\">
                            <span class=\"text-info\">
                                Aucun enseignant n'est enregistrée
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
", "admin/teacher/index.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\teacher\\index.html.twig");
    }
}
