package com.cisco.cmad.blog.rs;

import javax.ws.rs.QueryParam;

public class BlogQueryFilter {

	private @QueryParam("start") int start;
	private @QueryParam("size") int size;
		
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	 
	 
	 
	
	
}
