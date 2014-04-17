var charsets = {
  'alpha':                                                'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',             // 52
  'alpha_lowercase':                                      'abcdefghijklmnopqrstuvwxyz',                                       // 26
  'alpha_uppercase':                                      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',                                       // 26
  
  'alpha_numeric':                                        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',   // 62
  'alpha_numeric_lowercase':                              'abcdefghijklmnopqrstuvwxyz0123456789',                             // 36
  'alpha_numeric_uppercase':                              'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',                             // 36
  
  'alpha_hardtoconfuse':                                  'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',                  // 47 --- Omits: i, l, o, I, O
  'alpha_hardtoconfuse_lowercase':                        'abcdefghjkmnpqrstuvwxyz',                                          // 23 --- Omits: i, l, o
  'alpha_hardtoconfuse_uppercase':                        'ABCDEFGHJKLMNPQRSTUVWXYZ',                                         // 24 --- Omits: I, O
  
  'alpha_numeric_hardtoconfuse':                          'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789',          // 55 --- Omits: i, l, o, I, O, 0, 1
  'alpha_numeric_hardtoconfuse_lowercase':                'abcdefghjkmnpqrstuvwxyz23456789',                                  // 31 --- Omits: i, l, o, 0, 1
  'alpha_numeric_hardtoconfuse_uppercase':                'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',                                 // 32 --- Omits: I, O, 0, 1
  
  'alpha_consonants':                                     'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ',                       // 42 --- Omits: a, e, i, o, u, A, E, I, O, U
  'alpha_consonants_lowercase':                           'bcdfghjklmnpqrstvwxyz',                                            // 21 --- Omits: a, e, i, o, u
  'alpha_consonants_uppercase':                           'BCDFGHJKLMNPQRSTVWXYZ',                                            // 21 --- Omits: A, E, I, O, U
  
  'alpha_numeric_consonants':                             'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',             // 52 --- Omits: a, e, i, o, u, A, E, I, O, U
  'alpha_numeric_consonants_lowercase':                   'bcdfghjklmnpqrstvwxyz0123456789',                                  // 31 --- Omits: a, e, i, o, u
  'alpha_numeric_consonants_uppercase':                   'BCDFGHJKLMNPQRSTVWXYZ0123456789',                                  // 31 --- Omits: A, E, I, O, U
  
  'alpha_consonants_hardtoconfuse':                       'bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ',                        // 41 --- Omits: a, e, i, l, o, u, A, E, I, O, U
  'alpha_consonants_hardtoconfuse_lowercase':             'bcdfghjkmnpqrstvwxyz',                                             // 20 --- Omits: a, e, i, l, o, u
  'alpha_consonants_hardtoconfuse_uppercase':             'BCDFGHJKLMNPQRSTVWXYZ',                                            // 21 --- Omits: A, E, I, O, U
  
  'alpha_numeric_consonants_hardtoconfuse':               'bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ23456789',                // 49 --- Omits: a, e, i, l, o, u, A, E, I, O, U, 0, 1
  'alpha_numeric_consonants_hardtoconfuse_lowercase':     'bcdfghjkmnpqrstvwxyz23456789',                                     // 28 --- Omits: a, e, i, l, o, u, 0, 1
  'alpha_numeric_consonants_hardtoconfuse_uppercase':     'BCDFGHJKLMNPQRSTVWXYZ23456789',                                    // 29 --- Omits: A, E, I, O, U, 0, 1
  
  'binary':                                               '01',                                                               // 2  --- Base-2
  'decimal':                                              '0123456789',                                                       // 10 --- Base-10
  'hexadecimal_upper':                                    '0123456789ABCDEF',                                                 // 16 --- Base-16
  'hexadecimal_lower':                                    '0123456789abcdef',                                                 // 16 --- Base-16
  'octal':                                                '01234567',                                                         // 8  --- Base-8
}
exports.charsets = charsets;

function create() {
  var options = arguments[0] || {}
    , length = options.length || 32
    , charset = options.charset || charsets.alpha_numeric
    , str = ''
    ;
  
  for(var i = 0; i < length; i++) {
    str += charset[Math.floor(Math.random() * charset.length)];
  }
  
  return str;
}
exports.create = create;