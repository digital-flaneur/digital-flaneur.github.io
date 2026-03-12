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
        {% if pub.pdf %}<a href="{{ '/assets/pdf/' | append: pub.pdf | relative_url }}">PDF</a>{% endif %}
        {% if pub.url %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Link</a>{% endif %}
      </div>
    </li>
    {% endfor %}
    {% endfor %}
  </ul>
</div>
