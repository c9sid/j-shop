function slugify(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')        // replace spaces with -
        .replace(/[^\w-]+/g, '')     // remove non-word chars
        .replace(/--+/g, '-')        // replace multiple - with single -
        .replace(/^-+/, '')          // trim - from start
        .replace(/-+$/, '');         // trim - from end
}

export default slugify