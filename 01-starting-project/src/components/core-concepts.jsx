import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./Core-Concept.jsx";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {/* Down here is given three ways in which we can generate the same
    working elements, two of which are commented. */}

        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        {/* <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
