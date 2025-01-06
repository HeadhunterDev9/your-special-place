import { motion } from 'framer-motion';
import GiftBox from '../components/GiftBox';

function Gifts() {
  // Diese Geschenke können nach Belieben angepasst werden
  const gifts = [
    {
        id: 1,
        message: "In jedem Moment, den ich mit dir verbringe, entdecke ich einen neuen Grund, warum du so besonders für mich bist. Du bist wie ein Buch, dessen Seiten ich nie aufhören möchte zu lesen.",
        emoji: "📖"
      },
      {
        id: 2,
        message: "Manchmal schaue ich dich einfach nur an und denke mir: 'Wie habe ich es verdient, dass das Universum mir jemanden wie dich geschickt hat?' Du bist wie ein Geschenk des Himmels.",
        emoji: "⭐"
      },
      {
        id: 3,
        message: "Weißt du, was das Schönste an unserer gemeinsamen Zeit ist? Dass ich jeden Tag ein bisschen mehr von dir kennenlernen darf. Jedes deiner Lächeln, jede deiner Geschichten ist wie ein kostbarer Schatz für mich.",
        emoji: "💎"
      },
      {
        id: 4,
        message: "Mit dir zusammen zu sein fühlt sich an, als hätte ich endlich den fehlenden Teil meines Herzens gefunden. Du vervollständigst mich auf eine Art, die ich nie für möglich gehalten hätte.",
        emoji: "🧩"
      },
      {
        id: 5,
        message: "Ich wünschte, ich könnte dir die Welt durch meine Augen zeigen. Dann würdest du sehen, wie du alles um dich herum zum Strahlen bringst, wie ein Sonnenstrahl, der die Dunkelheit erhellt.",
        emoji: "🌅"
      },
      {
        id: 6,
        message: "Du bist nicht nur meine Partnerin, sondern auch meine beste Freundin, meine Vertraute und meine größte Unterstützung. Mit dir an meiner Seite fühle ich mich, als könnte ich alles erreichen.",
        emoji: "🌟"
      }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <header className="text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-2">
          Virtuelle Geschenke 🎁
        </h1>
        <p className="text-gray-600">
          Jedes Geschenk enthält eine besondere Botschaft für dich
        </p>
      </header>

      <div className="grid gap-6">
        {gifts.map((gift) => (
          <GiftBox
            key={gift.id}
            message={gift.message}
            emoji={gift.emoji}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Gifts;