function __(key, replacements = {}) {
    const translation = window.translations[key] || key;

    // Replace placeholders with actual values
    for (const placeholder in replacements) {
        translation = translation.replace(
            `:${placeholder}`,
            replacements[placeholder]
        );
    }

    return translation;
}
