let books = [
    {
        "name": "Clean Code",
        "author": "Robert C. Martin",
        "image": "1.webp",
        "likes": 1250,
        "liked": true,
        "price": 29.99,
        "publishedYear": 2008,
        "genre": "Softwareentwicklung",
        "description": "Ein praktischer Leitfaden für die Erstellung von sauberem und lesbarem Code. Perfekt für Entwickler, die ihre Programmierfähigkeiten verbessern möchten.",
        "comments": [
            {
                "name": "CodeMaster123",
                "comment": "Dieses Buch ist der heilige Gral für sauberen Code! Ein Muss für jeden Entwickler."
            },
            {
                "name": "NerdyNina",
                "comment": "Ich habe mehr über gutes Coden gelernt als in meinem gesamten Studium. Danke, Uncle Bob!"
            },
            {
                "name": "BugHunter84",
                "comment": "Wenn mein Code einen Geruch hätte, wäre es jetzt frische Bergluft. Danke für die Tipps!"
            },
            {
                "name": "DevDude",
                "comment": "Ein Klassiker! Hat mir geholfen, meinen Code von Spaghetti zu Lasagne zu machen."
            },
            {
                "name": "RefactorQueen",
                "comment": "Endlich weiß ich, wie man Code schreibt, den auch mein zukünftiges Ich versteht."
            }
        ]
    },
    {
        "name": "The Pragmatic Programmer",
        "author": "Andrew Hunt, David Thomas",
        "image": "2.jpeg",
        "likes": 980,
        "liked": false,
        "price": 34.50,
        "publishedYear": 1999,
        "genre": "Softwareentwicklung",
        "description": "Ein umfassender Ratgeber für pragmatische Programmierer. Bietet bewährte Techniken und Tipps zur Verbesserung der Softwareentwicklungspraxis.",
        "comments": []
    },
    {
        "name": "You Don't Know JS",
        "author": "Kyle Simpson",
        "image": "3.webp",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2015,
        "genre": "JavaScript",
        "description": "Eine tiefgehende Serie, die die Feinheiten und Eigenheiten von JavaScript erklärt. Ideal für Entwickler, die ihre Kenntnisse vertiefen möchten.",
        "comments": [
            {
                "name": "JSJunkie",
                "comment": "Ich dachte, ich wüsste alles über JavaScript. Dieses Buch hat mir das Gegenteil bewiesen. Fantastisch!"
            },
            {
                "name": "FrontendFan",
                "comment": "Hat mir die Augen geöffnet! JavaScript ist jetzt meine Superkraft."
            },
            {
                "name": "AsyncAce",
                "comment": "Ein Muss für jeden JavaScript-Entwickler. Jetzt verstehe ich Promises und Async/Await richtig."
            },
            {
                "name": "ClosuresChampion",
                "comment": "Ich habe endlich kapiert, was Closures sind. Danke, Kyle!"
            },
            {
                "name": "ScopeSlinger",
                "comment": "Scope und Hoisting sind jetzt keine Fremdwörter mehr. Ein großartiges Buch!"
            }
        ]
    },
    {
        "name": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "author": "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        "image": "4.webp",
        "likes": 750,
        "liked": false,
        "price": 42.00,
        "publishedYear": 1994,
        "genre": "Softwareentwicklung",
        "description": "Eine klassische Referenz zu Design Patterns, die zeigt, wie wiederverwendbare objektorientierte Software entwickelt wird. Perfekt für erfahrene Entwickler.",
        "comments": [
            {
                "name": "PatternPro",
                "comment": "Ein bisschen schwer zu lesen, aber die Design Patterns sind Gold wert. Absolute Pflichtlektüre!"
            },
            {
                "name": "OOPFan",
                "comment": "Dank dieses Buchs kenne ich jetzt das Geheimnis guter Objektorientierung. Sehr hilfreich!"
            }
        ]
    },
    {
        "name": "Refactoring: Improving the Design of Existing Code",
        "author": "Martin Fowler",
        "image": "5.webp",
        "likes": 1300,
        "liked": true,
        "price": 36.75,
        "publishedYear": 1999,
        "genre": "Softwareentwicklung",
        "description": "Ein umfassender Leitfaden zur Verbesserung des Designs von bestehendem Code. Essentiell für Entwickler, die ihre Codestruktur optimieren möchten.",
        "comments": []
    },
    {
        "name": "Effective Java",
        "author": "Joshua Bloch",
        "image": "6.webp",
        "likes": 890,
        "liked": false,
        "price": 45.30,
        "publishedYear": 2001,
        "genre": "Java",
        "description": "Ein unverzichtbares Handbuch für Java-Entwickler, das bewährte Programmiertechniken und -praktiken erläutert. Ideal für die Optimierung von Java-Code.",
        "comments": [
            {
                "name": "JavaGuru",
                "comment": "Ein Schatz voller Weisheiten für jeden Java-Entwickler. Kann es nur empfehlen."
            },
            {
                "name": "CodeCrusader",
                "comment": "Bloch bringt Java auf den Punkt. Meine Bibel für effektiven Java-Code."
            }
        ]
    },
    {
        "name": "JavaScript: The Good Parts",
        "author": "Douglas Crockford",
        "image": "7.webp",
        "likes": 1450,
        "liked": true,
        "price": 31.00,
        "publishedYear": 2008,
        "genre": "JavaScript",
        "description": "Ein prägnanter Überblick über die besten und mächtigsten Teile von JavaScript. Ideal für Entwickler, die das Potenzial von JavaScript voll ausschöpfen möchten.",
        "comments": [
            {
                "name": "GoodPartsGuru",
                "comment": "Ich verstehe jetzt, warum JavaScript so genial ist. Danke, Crockford!"
            }
        ]
    },
    {
        "name": "Cracking the Coding Interview",
        "author": "Gayle Laakmann McDowell",
        "image": "8.webp",
        "likes": 920,
        "liked": false,
        "price": 27.50,
        "publishedYear": 2008,
        "genre": "Karriere",
        "description": "Ein unverzichtbarer Leitfaden für alle, die sich auf technische Interviews vorbereiten. Enthält bewährte Tipps und Tricks sowie häufige Fragen und Antworten.",
        "comments": [
            {
                "name": "JobHunter",
                "comment": "Hat mir geholfen, meinen Traumjob zu landen. Ein unverzichtbares Werkzeug für Bewerber."
            }
        ]
    },
    {
        "name": "Introduction to the Theory of Computation",
        "author": "Michael Sipser",
        "image": "9.webp",
        "likes": 1800,
        "liked": true,
        "price": 69.99,
        "publishedYear": 1996,
        "genre": "Theorie",
        "description": "Ein umfassender Überblick über die theoretischen Grundlagen der Informatik. Perfekt für Studenten und Fachleute, die ihre theoretischen Kenntnisse vertiefen möchten.",
        "comments": [
            {
                "name": "CompTheoryNerd",
                "comment": "Die Fantasiewelt der Automaten und Turingmaschinen. Spannend und anspruchsvoll!"
            },
            {
                "name": "MathMind",
                "comment": "Eine perfekte Mischung aus Theorie und Praxis. Hat mir die Augen geöffnet."
            },
            {
                "name": "AlgoLover",
                "comment": "Das Buch ist eine Herausforderung, aber die Mühe lohnt sich. Habe viel gelernt."
            }
        ]
    }
];
