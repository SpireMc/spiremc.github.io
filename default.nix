{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    tailwindcss
  ];

  shellHook = ''
    tailwindcss -i styles/input.css -o styles/output.css --watch
  '';
}
