{\rtf1\ansi\ansicpg949\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function () \{\
  const sidebar = document.querySelector("#quarto-sidebar");\
\
  if (!sidebar) return;\
\
  const button = document.createElement("button");\
\
  button.id = "sidebar-toggle";\
  button.setAttribute("aria-label", "Toggle sidebar");\
  button.innerHTML = "\'8b";\
\
  document.body.appendChild(button);\
\
  button.addEventListener("click", function () \{\
    document.body.classList.toggle("sidebar-hidden");\
\
    const hidden = document.body.classList.contains("sidebar-hidden");\
\
    button.innerHTML = hidden ? "\'9b" : "\'8b";\
  \});\
\});}