import {FreeDictionary} from '../free-dictionary';

describe('FreeDictionary', () => {
  it('construction', () => {
    new FreeDictionary();
  });

  it('not a word', async () => {
    const dictionary = new FreeDictionary();
    const wordEntry = await dictionary.getWordEntry('asdfghjk');
    expect(wordEntry).toBe(null);
  });

  it('define word', async () => {
    const dictionary = new FreeDictionary();
    const wordEntry = await dictionary.getWordEntry('studious');

    expect(wordEntry).toStrictEqual({
      meanings: [
        {
          definition:
            'Given to thought, or to the examination of subjects by contemplation; contemplative.',
          example: undefined,
          partOfSpeech: 'adjective',
        },
        {
          definition:
            'Dedicated to study; devoted to the acquisition of knowledge from books',
          example: 'a studious scholar',
          partOfSpeech: 'adjective',
        },
        {
          definition:
            '(usually followed by an infinitive or by "of") Earnest in endeavors; attentive; diligent',
          example: 'She is studious to find new friends and allies',
          partOfSpeech: 'adjective',
        },
        {
          definition: 'Planned with study; deliberate; studied.',
          example: undefined,
          partOfSpeech: 'adjective',
        },
        {
          definition:
            'Favorable to study; suitable for thought and contemplation',
          example: 'the studious shade',
          partOfSpeech: 'adjective',
        },
      ],
      word: 'studious',
    });
  });

  it('word that is a noun and an adj', async () => {
    const dictionary = new FreeDictionary();
    const wordEntry = await dictionary.getWordEntry('pride');
    expect(wordEntry).toStrictEqual({
      meanings: [
        {
          definition:
            "The quality or state of being proud; an unreasonable overestimation of one's own superiority in terms of talents, looks, wealth, importance etc., which manifests itself in lofty airs, distance, reserve and often contempt of others.",
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition:
            "(often with of or in) A sense of one's own worth, and abhorrence of what is beneath or unworthy of one; lofty self-respect; noble self-esteem; elevation of character; dignified bearing; proud delight; -- in a good sense.",
          example: 'He had pride of ownership in his department.',
          partOfSpeech: 'noun',
        },
        {
          definition:
            'Proud or disdainful behavior or treatment; insolence or arrogance of demeanor; haughty bearing and conduct; insolent exultation; disdain; hubris.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition:
            'That of which one is proud; that which excites boasting or self-congratulation; the occasion or ground of self-esteem, or of arrogant and presumptuous confidence, as beauty, ornament, noble character, children, etc.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition: 'Show; ostentation; glory.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition:
            'Highest pitch; elevation reached; loftiness; prime; glory,',
          example: "to be in the pride of one's life.",
          partOfSpeech: 'noun',
        },
        {
          definition:
            'Consciousness of power; fullness of animal spirits; mettle; wantonness.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition:
            'Lust; sexual desire; especially, excitement of sexual appetite in a female beast.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition: '(collective) A company of lions or other large felines.',
          example:
            "A pride of lions often consists of a dominant male, his harem and their offspring, but young adult males 'leave home' to roam about as bachelors pride until able to seize/establish a family pride of their own.",
          partOfSpeech: 'noun',
        },
        {
          definition:
            'The small European lamprey species Petromyzon branchialis.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition: 'Alternative letter-case form of Pride.',
          example: undefined,
          partOfSpeech: 'noun',
        },
        {
          definition:
            'To take or experience pride in something; to be proud of it.',
          example: 'I pride myself on being a good judge of character.',
          partOfSpeech: 'verb',
        },
      ],
      word: 'pride',
    });
  });
});
