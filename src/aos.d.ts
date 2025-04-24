declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    mirror?: boolean;
  }

  interface AosStatic {
    init(options?: AosOptions): void;
  }

  const AOS: AosStatic;
  export default AOS;
}
