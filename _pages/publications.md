---
layout: default
title: Publications
permalink: /publications/
---

<div class="section">
  <h1 class="section-title">Publications</h1>
  <ul class="pub-list">
    {% assign grouped = site.data.publications | group_by: "year" | sort: "name" | reverse %}
    {% for group in grouped %}
    <h2 class="pub-year-heading">{{ group.name }}</h2>
    {% for pub in group.items %}
    <li class="pub-item">
      <div class="pub-title">{{ pub.title }}</div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-venue">
        <span class="pub-tag">{{ pub.abbr }}</span>
        {{ pub.venue }}
      </div>
      <div class="pub-links">
        {% if pub.pdf %}<a href="{{ '/assets/pdf/' | append: pub.pdf | relative_url }}">Paper</a>{% endif %}
        {% if pub.url and pub.pdf == nil %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Paper</a>{% endif %}
        {% if pub.demo %}<a href="{{ pub.demo }}" target="_blank" rel="noopener">Demo</a>{% endif %}
        {% if pub.code %}<a href="{{ pub.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
        {% if pub.software %}<a href="{{ pub.software }}" target="_blank" rel="noopener">Software</a>{% endif %}
      </div>
    </li>
    {% endfor %}
    {% endfor %}
  </ul>
</div>
