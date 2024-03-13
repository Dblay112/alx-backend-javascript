interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

export default function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MajorCredits" };
}

export default function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MinorCredits" };
}
