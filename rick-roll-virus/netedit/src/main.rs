#![allow(unused)]
use std::env;
use std::io::{self, Read, Write};
use std::net::TcpListener;
use std::process;

fn help() {
    println!("Usage: netedit <protocol> <port> <dst-host:dst-port>");
}

enum Protocol {
    TCP,
    UDP,
}

struct NetEdit {
    protocol: Protocol,
    port: u16,
    dst_host: String,
    dst_port: String,
}

fn parse_args(args: Vec<String>) -> Result<NetEdit, String> {
    if args.len() != 4 {
        return Err("Invalid number of arguments".to_owned());
    }

    let protocol = &args[1];
    let protocol = match protocol.to_lowercase().as_str() {
        "tcp" => Protocol::TCP,
        "udp" => Protocol::UDP,
        _ => return Err("Protocol must be one of `tcp` or `udp`".to_owned()),
    };

    let port = match args[2].parse::<u16>() {
        Ok(port) => port,
        Err(err) => return Err(format!("{}", err)),
    };

    let destination = &args[3];
    let destination: Vec<&str> = destination.split(':').collect();
    if destination.len() != 2 {
        eprintln!("Destination address must be in the form <host:port>");
        help();
        process::exit(1);
    };

    return Ok(NetEdit {
        protocol,
        port,
        dst_host: String::from(destination[0]),
        dst_port: String::from(destination[1]),
    });
}

impl NetEdit {
    fn udp_listener(&self) -> std::io::Result<()> {
        Ok(())
    }

    fn tcp_listener(&self) -> std::io::Result<()> {
        let mut listener = TcpListener::bind(format!("127.0.0.1:{}", self.port))?;

        for stream in listener.incoming() {
            match stream {
                Ok(mut stream) => {
                    let mut buf;
                    loop {
                        buf = [0; 128];
                        match stream.read(&mut buf) {
                            Ok(n) => {
                                io::stdout().write_all(&buf);
                                if n == 0 {
                                    break;
                                }
                            }
                            Err(e) => return Err(e),
                        };
                    }
                }
                Err(stream) => {}
            }
        }

        Ok(())
    }

    fn listen(&self) -> std::io::Result<()> {
        self.tcp_listener()
    }
}

/// netedit <protocol> <port> <dst-host:dst-port>
fn main() {
    let args: Vec<String> = env::args().collect();

    match parse_args(args) {
        Ok(netedit) => {
            netedit.listen().unwrap();
            process::exit(0);
        }
        Err(msg) => {
            eprintln!("{}", msg);
            help();
            process::exit(1);
        }
    };
}