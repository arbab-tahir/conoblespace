$.validator.addMethod("phoneUS",function(e,a){return e=e.replace(/\s+/g,""),this.optional(a)||9<e.length&&e.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number");