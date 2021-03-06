# Yamlet

 Simplified Yaml
 
## Rationale

Yaml is often more concise than XML or JSON. Yaml could be made even simpler
than that by omitting features.

## Facts

 * Data types: strings, lists, mappings.
 * Planned: True Yaml subset: some interpunction will be forbidden.
 * Planned: Yamlet specification.
   
## Additional notes
 
 * I also need an include feature. I decided to abstract away this feature from
   Yamlet. The include directive is just a mapping
   
    .include: path
   
   Yamlet passes it unchanged to the next layer. It shall do the including. 
 
## Credits Yamlish

Yamlet is very similar to
[Isaac Schlueter's yamlish](https://github.com/isaacs/yamlish). 
Therefore I copied yamlish.js and did some modifications.
Readers willrecognize Isaac's coding style immediately. :-)

Copyright (c) 2011 Isaac Z. Schlueter <i@izs.me>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
