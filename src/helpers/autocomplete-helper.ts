import { WikiData, WikiItem } from 'common/constants/types';

export class AutocompleteHelper {
  private locationTagKeys: Array<string> = [];
  private locationTags = new Map<string, string>([]);

  private materialKeys: Array<string> = [];
  private materials = new Map<string, string>([]);

  constructor(wikiData: WikiData) {
    if (wikiData.length > 0) this.handleWikiData(wikiData);
  }

  handleWikiData(wikiData: WikiData) {
    wikiData.forEach((data) => {
      if (data.type === 'material') this.populateKeysAndMap(data, this.materials, this.materialKeys);
      if (data.type === 'location') this.populateKeysAndMap(data, this.locationTags, this.locationTagKeys);
    });
  }

  populateKeysAndMap(item: WikiItem, genericMap: Map<string, string>, genericKeyList: Array<string>) {
    item.keyWords.forEach((keyWord) => {
      genericKeyList.push(keyWord);
      genericMap.set(keyWord, item.tag);
    });
  }

  suggestLocationTags(params: string) {
    return this.suggestGeneric(params, this.locationTags, this.locationTagKeys);
  }

  suggestMaterials(params: string) {
    return this.suggestGeneric(params, this.materials, this.materialKeys);
  }

  suggestGeneric(params: string, genericMap: Map<string, string>, genericKeyList: Array<string>) {
    const keys = this.suggest(genericKeyList, params);
    const suggestions = new Set(keys.map((key) => genericMap.get(key) || ''));

    return Array.from(suggestions);
  }

  private suggest(mappedWords: Array<string>, params: string): Array<string> {
    const keyWords = this.getKeyWords(params);
    const suggestions = [] as Array<string>;

    keyWords.forEach((keyWord) => {
      suggestions.push(...mappedWords.filter((word) => keyWord && word.indexOf(keyWord) === 0));
    });

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
}
