// character set
// Matches a single character present in the ist below
//e.g
// const charset = [lbcp]]ook

// escape character
//Matches a single characeter  not present in the list below
//e.g
// const list2 = [^kjsladfjali]ook

//ranges
// ranges is a short way to match a series characters
// e.g
// const list3 = [a-zA-z]
// match of a range of numbers
//const list = [0-9 ]

//repeating characters
// specify the how many times the characters should repeat or checks for a specific length
//e.g
//const list = [0-9]{5}
//to set min and max length
// const list = [a-z]{6, 12}

//Metacharacters and escaping

//Metacharacters

// \d- match any digit character(same as [0-9])
// \D - match non-digit character
// \w - match any word character(a-z, A-Z, 0-9 and _'s)
// \W  - match a non-word character
// \s - match a whitespace character (spaces, tabs etc)
// \S - match a non-whitespace character
// \t - match a tab character only
//  \b - match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// \B - match , but not at the beginning/end of a word
// '.' - match a single character, except newline or line terminator
// \n - finds a newline character
// So writing 'd' only matches the literal character 'd' while '/d' matches any digit character

// Special characters

// '+' - The one or more quantifier or it matches a character one or more times
// '\' - The escape character
// '[]' - The character set
// '[^]' - The negate symbols in a character set
// '?' - The zero or more quantifier (makes a preceding character  optional)
// '*' - The zero or more quantifier

// Starting &  Ending Patterns

// ^n - matches  any string with n at the beginning of it
// $n - matches any string with at the end it

// Alternate Characters

// | - matches for an alternative character

//e.g
// const list = /(t|p)ie/
