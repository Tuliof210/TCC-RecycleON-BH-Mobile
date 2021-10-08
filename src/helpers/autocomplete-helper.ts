export class AutocompleteHelper {
  private readonly tags = ['ponto verde', 'urpv', 'lev'];
  private readonly materials = ['metal', 'plastico', 'vidro', 'papel'];

  suggestTags(params: string) {
    return this.suggest(this.tags, params);
  }

  suggestMaterials(params: string) {
    return this.suggest(this.materials, params);
  }

  private suggest(mappedWords: Array<string>, params: string): Array<string> {
    const keyWords = this.getKeyWords(params);
    const suggestions = [] as Array<string>;

    keyWords.forEach((keyWord) => {
      suggestions.push(...mappedWords.filter((word) => keyWord && word.includes(keyWord)));
    });

    console.log(keyWords);
    console.log(suggestions);

    return suggestions;
  }

  private getKeyWords(params: string): Array<string> {
    return this.normalizeSeparator(params, [',', ';', '-'])
      .split('-')
      .map((keyWord) => this.normalize(keyWord));
  }

  private normalizeSeparator(params: string, separators: Array<string>): string {
    const mainSeparator = separators.pop();
    let normalizedParams = params;

    separators.forEach((separator) => {
      normalizedParams = normalizedParams.split(separator).join(mainSeparator);
    });

    return normalizedParams;
  }

  private normalize(text: string) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  //---------------------------------------
  async populateData(): Promise<void> {}
}
