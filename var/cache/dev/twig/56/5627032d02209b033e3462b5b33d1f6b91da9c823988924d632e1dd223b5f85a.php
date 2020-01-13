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

/* admin/class_room/index.html.twig */
class __TwigTemplate_3b494ca34dd5b8959f02127e413fd8bf04e21793a4d714533a4877baf167becd extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/class_room/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/class_room/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/class_room/index.html.twig", 1);
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

        echo "Scheduler: liste des classes";
        
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
            <h1>Liste des classes</h1>
            <hr/>
            ";
        // line 10
        $this->loadTemplate("common/flash_message.html.twig", "admin/class_room/index.html.twig", 10)->display($context);
        // line 11
        echo "            <div class=\"text-right margin-bottom-30\">
                <a href=\"";
        // line 12
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("class_room_new");
        echo "\" class=\"btn btn-primary\">
                    Créer une nouvelle classe
                </a>
            </div>
            <table class=\"table table-bordered table-condensed table-striped\">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Nom complet</th>
                    <th>Nombre des étudiants</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                ";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["class_rooms"]) || array_key_exists("class_rooms", $context) ? $context["class_rooms"] : (function () { throw new RuntimeError('Variable "class_rooms" does not exist.', 27, $this->source); })()));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["class_room"]) {
            // line 28
            echo "                    <tr>
                        <td>";
            // line 29
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["class_room"], "id", [], "any", false, false, false, 29), "html", null, true);
            echo "</td>
                        <td>";
            // line 30
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["class_room"], "name", [], "any", false, false, false, 30), "html", null, true);
            echo "</td>
                        <td>";
            // line 31
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["class_room"], "fullName", [], "any", false, false, false, 31), "html", null, true);
            echo "</td>
                        <td>";
            // line 32
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["class_room"], "studentsNumber", [], "any", false, false, false, 32), "html", null, true);
            echo "</td>
                        <td>
                            <ul class=\"list-inline\">
                                <li>
                                    <a href=\"";
            // line 36
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("class_room_show", ["id" => twig_get_attribute($this->env, $this->source, $context["class_room"], "id", [], "any", false, false, false, 36)]), "html", null, true);
            echo "\" class=\"btn btn-default\">
                                        <i class=\"lnr lnr-eye\"></i> Consulter
                                    </a>
                                </li>
                                <li>
                                    <a href=\"";
            // line 41
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("class_room_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["class_room"], "id", [], "any", false, false, false, 41)]), "html", null, true);
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
            // line 49
            echo "                    <tr>
                        <td colspan=\"6\">
                            <div class=\"text-center\">
                                <span class=\"text-info\">
                                    Aucune classe n'est enregistrée
                                </span>
                            </div>
                        </td>
                    </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['class_room'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 59
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
        return "admin/class_room/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  180 => 59,  165 => 49,  152 => 41,  144 => 36,  137 => 32,  133 => 31,  129 => 30,  125 => 29,  122 => 28,  117 => 27,  99 => 12,  96 => 11,  94 => 10,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Scheduler: liste des classes{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-md-12\">
            <h1>Liste des classes</h1>
            <hr/>
            {% include 'common/flash_message.html.twig' %}
            <div class=\"text-right margin-bottom-30\">
                <a href=\"{{ path('class_room_new') }}\" class=\"btn btn-primary\">
                    Créer une nouvelle classe
                </a>
            </div>
            <table class=\"table table-bordered table-condensed table-striped\">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Nom complet</th>
                    <th>Nombre des étudiants</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {% for class_room in class_rooms %}
                    <tr>
                        <td>{{ class_room.id }}</td>
                        <td>{{ class_room.name }}</td>
                        <td>{{ class_room.fullName }}</td>
                        <td>{{ class_room.studentsNumber }}</td>
                        <td>
                            <ul class=\"list-inline\">
                                <li>
                                    <a href=\"{{ path('class_room_show', {'id': class_room.id}) }}\" class=\"btn btn-default\">
                                        <i class=\"lnr lnr-eye\"></i> Consulter
                                    </a>
                                </li>
                                <li>
                                    <a href=\"{{ path('class_room_edit', {'id': class_room.id}) }}\" class=\"btn btn-success\">
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
                                    Aucune classe n'est enregistrée
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
", "admin/class_room/index.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\class_room\\index.html.twig");
    }
}
