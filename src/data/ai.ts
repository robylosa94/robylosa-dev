/**
 * "How I work with AI" section + "this site is the proof" case study, in both languages.
 * Tools named here are only the ones actually used: Claude Code, agents and custom skills.
 */
export const ai = {
  en: {
    nav: 'AI',
    title: 'How I work with AI',
    lead: 'AI is part of my everyday work. I use it to move faster on the repetitive parts and to explore ideas, but the decisions, the reviews and the responsibility for what goes live stay with me.',
    steps: [
      {
        title: 'Understand',
        text: 'When I step into code I don’t know yet, I explore it with Claude Code: where things live, what depends on what, and what I might break.',
        tools: ['Claude Code'],
      },
      {
        title: 'Plan',
        text: 'Before writing any code I have it draft a plan with the steps to follow, and then I fix it myself. That’s where most mistakes get caught.',
        tools: ['Claude Code'],
      },
      {
        title: 'Build',
        text: 'I let agents write the first drafts of components, tests and refactors, and run independent tasks in parallel. I steer them, correct course and keep the code consistent with the rest of the project.',
        tools: ['Claude Code', 'Agents'],
      },
      {
        title: 'Review',
        text: 'Agents help me with checks and code reviews, but I read every change myself before it’s merged.',
        tools: ['Claude Code', 'Agents'],
      },
      {
        title: 'Automate',
        text: 'Whatever I do often becomes a custom skill or an automated workflow: project-specific instructions and procedures the AI follows the same way every time. The time I save goes back into the product and the details.',
        tools: ['Custom skills', 'Workflows', 'Agents'],
      },
    ],
    principlesLabel: 'Ground rules',
    principles: ['AI makes me faster, but I make the calls.', 'I read every line before it goes live.', 'No sensitive data in prompts.'],
    proof: {
      label: 'Case study',
      title: 'This site is the proof',
      text: 'I built this site the way I approach every project: I decide what to do and how, and Claude Code helps me get there faster. I chose the design, wrote the copy and checked the code; the AI let me try more directions before landing on the right one.',
    },
  },
  it: {
    nav: 'AI',
    title: "Come lavoro con l'AI",
    lead: "L'AI fa parte del mio lavoro di tutti i giorni. La uso per andare più veloce sulle parti ripetitive e per esplorare idee, ma le decisioni, le revisioni e la responsabilità di quello che va online restano mie.",
    steps: [
      {
        title: 'Capire',
        text: 'Quando entro in una parte di codice che non conosco, la esploro insieme a Claude Code: capisco dove stanno le cose, cosa dipende da cosa e cosa rischio di rompere.',
        tools: ['Claude Code'],
      },
      {
        title: 'Pianificare',
        text: 'Prima di scrivere codice mi faccio preparare un piano con i passaggi da seguire, e poi lo sistemo io. È lì che si evita la maggior parte degli errori.',
        tools: ['Claude Code'],
      },
      {
        title: 'Sviluppare',
        text: 'Lascio agli agenti le prime bozze di componenti, test e refactoring, e porto avanti in parallelo i lavori indipendenti. Io li guido, correggo il tiro e tengo il codice coerente con il resto del progetto.',
        tools: ['Claude Code', 'Agenti'],
      },
      {
        title: 'Verificare',
        text: 'Per i controlli e le code review mi faccio aiutare dagli agenti, ma ogni modifica la rileggo io prima del merge.',
        tools: ['Claude Code', 'Agenti'],
      },
      {
        title: 'Automatizzare',
        text: "Quello che faccio spesso lo trasformo in skill personalizzate e workflow automatici: istruzioni e procedure su misura per il progetto, che l'AI segue sempre allo stesso modo. Il tempo che risparmio lo dedico al prodotto e ai dettagli.",
        tools: ['Skill personalizzate', 'Workflow', 'Agenti'],
      },
    ],
    principlesLabel: 'Le mie regole',
    principles: ["L'AI mi fa andare più veloce, ma decido io.", 'Rileggo ogni riga prima che vada online.', 'Niente dati sensibili nei prompt.'],
    proof: {
      label: 'Case study',
      title: 'Questo sito ne è la prova',
      text: "Ho realizzato questo sito come faccio con ogni progetto: io decido cosa fare e come, Claude Code mi aiuta a farlo più in fretta. Ho scelto il design, scritto i testi e controllato il codice; l'AI mi ha permesso di provare più strade prima di trovare quella giusta.",
    },
  },
} as const;
