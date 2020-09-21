interface OpenDialogOptions {
  accept?: string;
  multiple?: boolean;
}

/**
 * @param options
 * @since 1.0.0
 * @author Pv Duc
 */
export const openFileDialog: (
  options: OpenDialogOptions,
) => Promise<FileList> = (options) => {
  return new Promise((resolve) => {
    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('multiple', `${options.multiple}`);
    input.setAttribute('accept', options.accept as string);
    input.addEventListener(
      'change',
      function () {
        resolve(this.files as FileList);
      },
      false,
    );
    input.click();
  });
};

/**
 * @param file
 * @since 1.0.0
 * @author Pv Duc
 */
export const fileToDataURL: (file: File) => Promise<string> = (file) => {
  return new Promise<string>((resolve) => {
    const fileReader: FileReader = new FileReader();
    fileReader.addEventListener('load', function () {
      resolve(this.result as string);
    });
    fileReader.readAsDataURL(file as File);
  });
};

/**
 * @param file
 * @param fileName
 * @since 1.0.0
 * @author Pv Duc
 */
export const saveFile: (file: File | null, fileName: string) => void = (
  file,
  fileName,
) => {
  const url = URL.createObjectURL(file);
  const anchor: HTMLAnchorElement = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', fileName);
  anchor.click();
};
