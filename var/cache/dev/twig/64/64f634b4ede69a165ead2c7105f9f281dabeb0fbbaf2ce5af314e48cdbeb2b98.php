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

/* admin/hall/show.html.twig */
class __TwigTemplate_86882001364fa5969d9be9a373792e164c76d61002d0ad06f29060fbd85432a5 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/hall/show.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/hall/show.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/hall/show.html.twig", 1);
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

        // line 4
        echo "    Fiche salle
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 7
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        // line 8
        echo "    <div class=\"row\">
        <div class=\"col-xs-12\">
            <h1>Fiche salle</h1> <hr/>
            ";
        // line 11
        $this->loadTemplate("common/flash_message.html.twig", "admin/hall/show.html.twig", 11)->display($context);
        // line 12
        echo "            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"";
        // line 15
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("hall_index");
        echo "\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"";
        // line 20
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("hall_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 20, $this->source); })()), "id", [], "any", false, false, false, 20)]), "html", null, true);
        echo "\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>


                    </li>
                    <li>
                        ";
        // line 27
        echo twig_include($this->env, $context, "admin/hall/_delete_form.html.twig");
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
        // line 40
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 40, $this->source); })()), "id", [], "any", false, false, false, 40), "html", null, true);
        echo "</td>
                    </tr>
                    <tr>
                        <th>Nom</th>
                        <td>";
        // line 44
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 44, $this->source); })()), "name", [], "any", false, false, false, 44), "html", null, true);
        echo "</td>
                    </tr>
                    <tr>
                        <th>Département</th>
                        <td>";
        // line 48
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 48, $this->source); })()), "department", [], "any", false, false, false, 48), "html", null, true);
        echo "</td>
                    </tr>
                    <tr>
                        <th>Etage</th>
                        <td>";
        // line 52
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["hall"]) || array_key_exists("hall", $context) ? $context["hall"] : (function () { throw new RuntimeError('Variable "hall" does not exist.', 52, $this->source); })()), "floor", [], "any", false, false, false, 52), "html", null, true);
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
        return "admin/hall/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 52,  150 => 48,  143 => 44,  136 => 40,  120 => 27,  110 => 20,  102 => 15,  97 => 12,  95 => 11,  90 => 8,  80 => 7,  69 => 4,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}
    Fiche salle
{% endblock %}

{% block content %}
    <div class=\"row\">
        <div class=\"col-xs-12\">
            <h1>Fiche salle</h1> <hr/>
            {% include 'common/flash_message.html.twig' %}
            <div class=\"pull-right\">
                <ul class=\"list-inline\">
                    <li>
                        <a href=\"{{ path('hall_index') }}\">
                            Retour à la liste
                        </a>
                    </li>
                    <li>
                        <a href=\"{{ path('hall_edit', {'id': hall.id}) }}\" class=\"btn btn-success\">
                            Mettre à jour
                        </a>


                    </li>
                    <li>
                        {{ include('admin/hall/_delete_form.html.twig') }}
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
                        <td>{{ hall.id }}</td>
                    </tr>
                    <tr>
                        <th>Nom</th>
                        <td>{{ hall.name }}</td>
                    </tr>
                    <tr>
                        <th>Département</th>
                        <td>{{ hall.department }}</td>
                    </tr>
                    <tr>
                        <th>Etage</th>
                        <td>{{ hall.floor }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
{% endblock %}
", "admin/hall/show.html.twig", "C:\\Users\\LENOVO\\Desktop\\Projet - Emploi - 2020\\Scheduler\\templates\\admin\\hall\\show.html.twig");
    }
}
