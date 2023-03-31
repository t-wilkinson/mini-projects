; vim: filetype=nasm

global mandelbrot_view

section .text

mandelbrot_view:
    ;    buf:edi
    ; -> width:esi
    ; -> height:edx
    ; -> (x:xmm0 , y:xmm1)
    ; -> scale:xmm2
    ; -> void

    push r12 ; x_pos, u32
    push r13 ; y_pos, u32
    mov r12d, 0
    mov r13d, 0
    mov r14, 50.0 ; mandelbrot bound

.draw_row:
    mov r12d, 0 ; reset inner loop counter, x_pos

.draw_pixel:
    ; each pixel has 4 bytes of information: r g b a
    push xmm0
    push xmm1

    mandelbrot
    ; xmm0
    ; xmm1
    mov r14, 0xF0F0F0FF
    mov [rdi], r14
    mov r14, 4  ; move 4 bytes to next pixel
    add rdi, r14

    pop xmm1
    pop xmm0

    ; ; calculate the current index in the buffer
    ; mov eax, esi    ; ( ( width
    ; mul r13d         ;       * y_pos
    ; add eax, r12d    ;   ) + x_pos
    ; mov r14d, 4
    ; mul r14d         ; ) * 4
    ; mov eax
    ; mov edi + eax, 0xFF

    inc r12d
    cmp r12d, esi
    jne .draw_pixel

    inc r13d
    cmp r13d, edx
    jne .draw_row

    ; cleanup
    pop r13
    pop r12

    ret

mandelbrot:
    ;    (x:xmm0 , y:xmm1)
    ; -> scale:xmm2
    ; -> (z_a:xmm0 , z_bi:xmm1)

    mov r12, 0
    mov r13, 50

    C_square

    inc r12
    cmp r12, r13
    jne mandelbrot

    ret

C_square:
    ;    (a:xmm0 , b:xmm1)
    ; -> C_mul
    mov xmm2, xmm0
    mov xmm3, xmm1
    C_mul
    ret

C_mul:
    ;    (a:xmm0 , b:xmm1)
    ; -> (c:xmm2 , d:xmm3)
    ; -> (ac-bd:xmm0 , ad+bc:xmm1)

    ; ac-bd
    mulsd xmm4, xmm0, xmm2
    mulsd xmm5, xmm1, xmm3
    fadd xmm4, xmm5
    mov xmm6, xmm4

    ; ad+bc
    mulsd xmm4, xmm0, xmm3
    mulsd xmm5, xmm1, xmm2
    fadd xmm4, xmm5
    mov xmm7, xmm4

    mov xmm0, xmm6
    mov xmm1, xmm7

    ret
