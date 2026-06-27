/* ==========================================================
   SIMULADOR DE CARREIRA
   WHAY HELP
==========================================================*/

/* ==========================================
   PERFIS PROFISSIONAIS
==========================================*/

const perfis = {

    dev:{

        icone:"💻",

        nome:"Desenvolvedor Full Stack",

        salario:{

            estagio:"R$ 1.500 a R$ 2.500",

            junior:"R$ 4.500 a R$ 6.500",

            pleno:"R$ 7.500 a R$ 10.000",

            senior:"R$ 12.000 a R$ 18.000+"

        },

        tecnologias:[

            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Git",
            "SQL"

        ],

        certificacoes:[

            "AWS Cloud Practitioner",
            "Microsoft AZ-900",
            "Oracle Java"

        ],

        empresas:[

            "Google",
            "Microsoft",
            "Nubank",
            "TOTVS",
            "iFood"

        ],

        passos:[

            "Estudar lógica de programação",
            "Aprender HTML e CSS",
            "Dominar JavaScript",
            "Aprender React",
            "Estudar Node.js",
            "Banco de Dados",
            "Criar projetos para portfólio"

        ],

        caracteristicas:[

            "Criativo",
            "Analítico",
            "Persistente",
            "Gosta de resolver problemas"

        ]

    },

    seguranca:{

        icone:"🔐",

        nome:"Especialista em Cibersegurança",

        salario:{

            estagio:"R$ 1.600 a R$ 2.500",

            junior:"R$ 5.000 a R$ 7.000",

            pleno:"R$ 8.000 a R$ 12.000",

            senior:"R$ 15.000+"

        },

        tecnologias:[

            "Linux",
            "Python",
            "Kali Linux",
            "Wireshark",
            "Metasploit"

        ],

        certificacoes:[

            "Security+",
            "CEH",
            "CompTIA"

        ],

        empresas:[

            "Banco do Brasil",
            "IBM",
            "Cisco",
            "Accenture"

        ],

        passos:[

            "Aprender Redes",
            "Aprender Linux",
            "Estudar Segurança",
            "Pentest",
            "Cloud Security"

        ],

        caracteristicas:[

            "Observador",
            "Paciente",
            "Analítico",
            "Responsável"

        ]

    }

},
cloud:{

    icone:"☁️",

    nome:"Engenheiro de Cloud",

    salario:{

        estagio:"R$ 1.800 a R$ 2.800",

        junior:"R$ 5.500 a R$ 8.000",

        pleno:"R$ 9.000 a R$ 13.000",

        senior:"R$ 15.000 a R$ 22.000+"

    },

    tecnologias:[

        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes"

    ],

    certificacoes:[

        "AWS Cloud Practitioner",
        "AWS Solutions Architect",
        "Microsoft AZ-104"

    ],

    empresas:[

        "Amazon",
        "Microsoft",
        "Google",
        "IBM"

    ],

    passos:[

        "Aprender Redes",
        "Linux",
        "Virtualização",
        "Docker",
        "Cloud"

    ],

    caracteristicas:[

        "Organizado",
        "Analítico",
        "Curioso",
        "Proativo"

    ]

},
dados:{

    icone:"📊",

    nome:"Cientista de Dados",

    salario:{

        estagio:"R$ 1.700 a R$ 2.500",

        junior:"R$ 5.000 a R$ 7.500",

        pleno:"R$ 8.000 a R$ 12.000",

        senior:"R$ 15.000+"

    },

    tecnologias:[

        "Python",
        "SQL",
        "Power BI",
        "Pandas",
        "Excel"

    ],

    certificacoes:[

        "Google Data Analytics",
        "Microsoft DP-900"

    ],

    empresas:[

        "Nubank",
        "Mercado Livre",
        "Google"

    ],

    passos:[

        "Estudar Estatística",
        "Python",
        "SQL",
        "Machine Learning"

    ],

    caracteristicas:[

        "Lógico",
        "Analítico",
        "Paciente",
        "Detalhista"

    ]

},
redes:{

    icone:"🌐",

    nome:"Administrador de Redes",

    salario:{

        estagio:"R$ 1.500 a R$ 2.200",

        junior:"R$ 4.000 a R$ 6.000",

        pleno:"R$ 7.000 a R$ 9.000",

        senior:"R$ 12.000+"

    },

    tecnologias:[

        "Cisco",
        "Linux",
        "TCP/IP",
        "Firewall"

    ],

    certificacoes:[

        "CCNA",

        "Network+"

    ],

    empresas:[

        "Cisco",

        "Claro",

        "Vivo"

    ],

    passos:[

        "Redes",

        "Linux",

        "Roteadores",

        "Segurança"

    ],

    caracteristicas:[

        "Paciente",

        "Organizado",

        "Responsável"

    ]

},
ia:{

    icone:"🤖",

    nome:"Engenheiro de Inteligência Artificial",

    salario:{

        estagio:"R$ 2.000",

        junior:"R$ 6.000 a R$ 8.500",

        pleno:"R$ 10.000 a R$ 15.000",

        senior:"R$ 18.000+"

    },

    tecnologias:[

        "Python",

        "TensorFlow",

        "PyTorch",

        "Machine Learning"

    ],

    certificacoes:[

        "Google AI",

        "Azure AI"

    ],

    empresas:[

        "OpenAI",

        "Google",

        "Meta"

    ],

    passos:[

        "Python",

        "Matemática",

        "Machine Learning",

        "Deep Learning"

    ],

    caracteristicas:[

        "Muito analítico",

        "Curioso",

        "Criativo"

    ]

},
design:{

    icone:"🎨",

    nome:"UX/UI Designer",

    salario:{

        estagio:"R$ 1.500",

        junior:"R$ 4.000",

        pleno:"R$ 7.000",

        senior:"R$ 12.000+"

    },

    tecnologias:[

        "Figma",

        "Adobe XD",

        "Photoshop"

    ],

    certificacoes:[

        "Google UX Design"

    ],

    empresas:[

        "Nubank",

        "iFood",

        "PicPay"

    ],

    passos:[

        "UX",

        "UI",

        "Figma",

        "Prototipação"

    ],

    caracteristicas:[

        "Criativo",

        "Empático",

        "Observador"

    ]

},
suporte:{

    icone:"🛠️",

    nome:"Analista de Suporte",

    salario:{

        estagio:"R$ 1.300",

        junior:"R$ 3.500",

        pleno:"R$ 5.500",

        senior:"R$ 8.500+"

    },

    tecnologias:[

        "Windows",

        "Linux",

        "Office",

        "Hardware"

    ],

    certificacoes:[

        "ITIL",

        "CompTIA A+"

    ],

    empresas:[

        "TOTVS",

        "Dell",

        "Positivo"

    ],

    passos:[

        "Hardware",

        "Redes",

        "Windows",

        "Linux"

    ],

    caracteristicas:[

        "Comunicativo",

        "Paciente",

        "Prestativo"

    ]

}
