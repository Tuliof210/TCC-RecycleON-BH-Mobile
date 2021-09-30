export class AutocompleteHelper {
  private readonly locationTags = ['ponto verde', 'urpv', 'lev'];
  private readonly materialsTags = ['metal', 'plastico', 'vidro', 'papel'];

  sugestLocation(text: string) {
    return this.sugest(this.locationTags, text);
  }

  sugestMaterials(text: string) {
    return this.sugest(this.materialsTags, text);
  }

  private sugest(tags: Array<string>, text: string) {
    const normalizedText = this.normalize(text);
    return tags.filter((tag) => tag.includes(normalizedText));
  }

  private normalize(text: string) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
