block('suggest')
    .match(function() {
        return this.mods['has-dataprovider'];
    })
    .js()(function() {
        return this.extend(applyNext() || {}, this.ctx.dataprovider);
    })
